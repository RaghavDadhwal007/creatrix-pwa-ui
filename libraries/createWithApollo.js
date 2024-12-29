/* eslint-disable no-param-reassign */
import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import {  Cookies } from 'react-cookie';

let globalApolloClient = null;

const createApolloClient = (apolloClient, initialState, ctx) => {
    apolloClient.ssrMode = Boolean(ctx);
    apolloClient.cache.restore(initialState);

    return apolloClient;
};

const initApolloClient = (apolloClient, initialState, ctx) => {
    if (typeof window === 'undefined') {
        return createApolloClient(apolloClient(ctx), initialState, ctx);
    }

    if (!globalApolloClient) {
        globalApolloClient = createApolloClient(
            apolloClient(ctx),
            initialState,
            ctx,
        );
    }

    return globalApolloClient;
};

export const initOnContext = (ac, ctx) => {
    const inAppContext = Boolean(ctx.ctx);

    if (process.env.NODE_ENV === 'development') {
        if (inAppContext) {
            console.warn(
                'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n'
                + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n',
            );
        }
    }

    const apolloClient = ctx.apolloClient || initApolloClient(ac, ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

    apolloClient.toJSON = () => null;

    ctx.apolloClient = apolloClient;
    if (inAppContext) {
        ctx.ctx.apolloClient = apolloClient;
    }

    return ctx;
};

export const createWithApollo = (ac) => ({ ssr = false } = {}) => (PageComponent) => {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        let client;
        if (apolloClient) {
            client = apolloClient;
        } else {
            client = initApolloClient(ac, apolloState, undefined);
        }

        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';
        WithApollo.displayName = `withApollo(${ displayName })`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (ctx) => {
            const inAppContext = Boolean(ctx.ctx);
            const { apolloClient } = initOnContext(ac, ctx);

            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            } else if (inAppContext) {
                pageProps = await App.getInitialProps(ctx);
            }
            pageProps.route = ctx.asPath;
            pageProps.cookies = new Cookies(ctx?.req?.headers?.cookie);

            if (typeof window === 'undefined') {
                const { AppTree } = ctx;
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }

                if (ssr && AppTree) {
                    try {
                        let props;
                        if (inAppContext) {
                            props = {
                                ...pageProps, apolloClient, route: ctx.asPath, cookies: new Cookies(ctx?.req?.headers?.cookie),
                            };
                        } else {
                            props = {
                                pageProps: {
                                    ...pageProps, apolloClient, route: ctx.asPath, cookies: new Cookies(ctx?.req?.headers?.cookie),
                                },
                            };
                        }

                        await getDataFromTree(<AppTree {...props}  />);
                    } catch (error) {
                        console.error('Error while running `getDataFromTree`', error);
                    }
                }
            }
            return {
                ...pageProps,
                apolloState: apolloClient?.cache?.extract?.(),
                apolloClient: ctx?.apolloClient,
            };
        };
    }

    return WithApollo;
};
