import React from 'react';
import dynamic from 'next/dynamic';
import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';

const CheckoutView = dynamic(
    () => import('@views/CheckoutView/CheckoutView'),
    { ssr: false },
);

const Checkout = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <CheckoutView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(Checkout));
