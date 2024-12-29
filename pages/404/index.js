import React from 'react';
import dynamic from 'next/dynamic';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';

const ErrorPageView = dynamic(
    () => import('@views/404ErrorPageView/404ErrorPageView'),
    { ssr: false },
);

const ErrorPage = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <>
        <RootContextProvider appProps={appProps} cookies={cookies}>
            <AppWrapper route={route}>
                <ErrorPageView />
            </AppWrapper>
        </RootContextProvider>
    </>
);

export default withReducer(withApollo({ ssr: false })(ErrorPage));
