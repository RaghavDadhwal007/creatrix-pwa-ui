import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomNavigationHook from 'hooks/customNavigationHook';
import routes from '@views/routes';
import config from '../../../../config';

const useBillingSubscriptionDetailsHook = () => {
    const [ loading, setLoading ] = useState(true);
    const [ isPlanPurchased, setIsPlanPurchased ] = useState(false);
    const [ billingDetails, setBillingDetails ] = useState({});
    const { callApi } = useCustomAxiosCallHook();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const isRefetch = useSelector(({ refetchData }) => refetchData.isRefetch);

    const fetchBillingDetails = async () => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/user-plan`,
            },
        });

        if (response.status === 200) {
            setBillingDetails(response?.data?.data);
            setIsPlanPurchased(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBillingDetails();
    }, [ isRefetch ]);

    const checkoutRedirect = () => {
        handleRedirect(routes.checkout.path);
    };
    return {
        loading,
        billingDetails,
        isPlanPurchased,
        checkoutRedirect,
    };
};

const BillingSubscriptionDetailsFunc = { useBillingSubscriptionDetailsHook };

export default BillingSubscriptionDetailsFunc;
