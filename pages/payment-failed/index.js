import React from 'react';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import CustomNavigationHook from 'hooks/customNavigationHook';
import routes from '@views/routes';
import CircularJSON from 'circular-json';

const PaymentFailed = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    handleRedirect(routes.checkout.path, { paymentStatusFlag: 'failed' }, routes.checkout.path);
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

export default withReducer(withApollo({ ssr: false })(PaymentFailed));
