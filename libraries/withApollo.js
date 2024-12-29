import {
    ApolloClient,  HttpLink, InMemoryCache,
} from '@apollo/client';
import {  Cookies } from 'react-cookie';
import config from '../config';
import { createWithApollo } from './createWithApollo';

const createClient = (ctx, initialState) => {
    const cookies = new Cookies(ctx?.req?.headers?.cookie);
    const getAuthHeaders = () => ({ Authorization: `Bearer ${ cookies.get('user')?.accessToken }` });
    const link = new HttpLink({
        uri: config.GQL_BASE_URL,
        headers: getAuthHeaders(),
    });

    return new ApolloClient({
        connectToDevTools: true,
        ssrMode: !!(typeof window === 'undefined'),  // Disables forceFetch on the server (so queries are only run once)
        cache: new InMemoryCache().restore(initialState || {}),
        link,
    });
};

export default createWithApollo(createClient);
