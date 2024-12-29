import React from 'react';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import CustomNavigationHook from 'hooks/customNavigationHook';
import routes from '@views/routes';
import CircularJSON from 'circular-json';

/*
props => data
// data coming from the PayUBiz server
*/

const PaymentSuccess = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    handleRedirect(routes.checkout.path, { paymentStatusFlag: 'success' }, routes.checkout.path);
    return (
        <div>Redirecting..</div>
    );
};

export async function getServerSideProps(context) {
    const str = CircularJSON.stringify(context.req);
    return {
        props: { data: JSON.stringify(str) || {} },
    };
}

export default withReducer(withApollo({ ssr: false })(PaymentSuccess));
