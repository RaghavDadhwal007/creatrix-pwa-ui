import React from 'react';
import { useSelector } from 'react-redux';

const PayUForm = ({
    subscriptionPlanData,
    formikProps,
    handlePayment,
}) => {
    const userPhoneNumber = useSelector(({ userState }) => userState?.user?.ph_number);
    return (
        <form
            action="https://test.payu.in/_payment"
            method="post"
            onSubmit={handlePayment}
            id="payUPayment"
        >
            <input type="hidden" name="key" value={subscriptionPlanData?.key} />
            <input type="hidden" name="txnid" value={subscriptionPlanData?.txnid} />
            <input type="hidden" name="productinfo" value={subscriptionPlanData?.productinfo} />
            <input type="hidden" name="amount" value={subscriptionPlanData?.amount} />
            <input type="hidden" name="email" value={subscriptionPlanData?.email} />
            <input type="hidden" name="firstname" value={subscriptionPlanData?.firstname} />
            <input type="hidden" name="surl" value={subscriptionPlanData?.surl} />
            <input type="hidden" name="furl" value={subscriptionPlanData?.furl} />
            <input type="hidden" name="udf1" value={subscriptionPlanData?.u_token} />
            <input type="hidden" name="udf2" value={subscriptionPlanData?.u_id} />
            <input type="hidden" name="phone" value={userPhoneNumber || formikProps?.values?.phone_number} />
            <input type="hidden" name="hash" value={subscriptionPlanData?.hash} />
        </form>
    );
};

export default PayUForm;
