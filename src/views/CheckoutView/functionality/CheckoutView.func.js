import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UtilityAlertActions from 'redux/actions/utilityAlert.action';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import Checkout from 'src/layouts/CheckoutForm/CheckoutForm';
import ChooseYourPlanLayout from 'src/layouts/ChooseYourPlanLayout/ChooseYourPlan';
import checkoutActions from 'redux/actions/checkout.actions';
import { useCustomQuery } from 'hooks/customGqlHook';
import graphqlQueries from 'graphql/queries';

const useCheckout = () => {
    const [ selectedTab, setSelectedTab ] = useState('choose_your_plan');
    const router = useRouter();
    const { fromHome, paymentStatusFlag } = router.query;
    const pathName = router.asPath;

    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const reduxDispatch = useDispatch();
    const { setSubscriptionObj } = checkoutActions;
    const accessToken  = useSelector(({ userState }) => userState.accessToken);

    const {
        data, loading,
    } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_SUBSCRIPTION_PAGE,
        variables: {
            environment: 'development',
            url: 'checkout',
            refs: [ 'page_blocks.subscription_module.reference', 'page_blocks.why_creatigo_block.reference', 'page_blocks.bottom_block.bottom_subscription_block.faq_reference' ],
        },
    });

    useEffect(() => {
        if (fromHome) {
            setSelectedTab('checkout');
        }
        if (paymentStatusFlag) {
            if (paymentStatusFlag === 'failed') {
                reduxDispatch(UtilityAlertActions.setAlert({
                    success: false,
                    open: true,
                    message: 'Your payment has been declined. Please update payment method on your Billings & Subscription page.',
                }));
            } if (paymentStatusFlag === 'success') {
                reduxDispatch(UtilityAlertActions.setAlert({
                    success: true,
                    open: true,
                    message: 'Your payment is successful.',
                }));
            }
        }
    }, []);

    const handleCheckout = (e, subscriptionDetails) => {
        e?.stopPropagation();
        if (pathName === '/') {
            if (accessToken) {
                handleRedirect('/checkout', { fromHome: true }, '/checkout');
            } else {
                reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
            }
        }
        if (pathName === '/checkout') {
            if (accessToken) {
                setSelectedTab('checkout');
            } else {
                reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
            }
        }
        reduxDispatch(setSubscriptionObj({
            subscriptionDetails,
        }));
    };
    const tabs = [
        {
            id: 'choose_your_plan',
            title: 'Choose Your Plan',
        },
        {
            id: 'create_your_account',
            title: 'Create Your Account',
        },
        {
            id: 'checkout',
            title: 'Checkout',
        },
    ];

    const SelectedView = () => {
        if (selectedTab === 'choose_your_plan') {
            return <ChooseYourPlanLayout handleCheckout={handleCheckout} />;
        }
        if (selectedTab === 'create_your_account') {
            return <Grid container justifyContent="center"> <Typography>Create Your Account</Typography></Grid>;
        }
        if (selectedTab === 'checkout') {
            return <Checkout />;
        }
        return null;
    };

    return {
        selectedTab,
        setSelectedTab,
        tabs,
        SelectedView,
        handleCheckout,
        data,
        loading,
    };
};

export default useCheckout;
