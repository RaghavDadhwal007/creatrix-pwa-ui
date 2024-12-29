import {
    ApolloClient, ApolloProvider, HttpLink, InMemoryCache,
} from '@apollo/client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserSelector from 'redux/selectors/user.selector';
import fetch from 'isomorphic-unfetch';
import config from '../config';

export const getApolloClient = () => new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: config.GQL_BASE_URL,
        fetch,
    }),
});

const GraphQlClientWrapper = ({ children }) => {
    const [ authToken, setAuthToken ] = useState(null);
    const   accessToken  = useSelector(UserSelector.getUserAccessToken);

    useEffect(() => {
        if (accessToken) {
            setAuthToken(accessToken);
        } else {
            setAuthToken(null);
        }
    }, [ accessToken ]);

    const getAuthHeaders = () => ({ Authorization: `Bearer ${ authToken }` });

    const link = new HttpLink({
        uri: config.GQL_BASE_URL,
        headers: getAuthHeaders(),
    });

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link,
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default GraphQlClientWrapper;
