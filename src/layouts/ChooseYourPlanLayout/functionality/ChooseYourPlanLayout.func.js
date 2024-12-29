import graphqlQueries from 'graphql/queries';
import useAppInitializer from 'hooks/appInitializerHook';
import { useQueryHook } from 'hooks/customGqlHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useEffect } from 'react';

const useSubscriptionPlanLayout = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const {
        createCustomABTestingEvent,
        removeCustomABTestingEvent,
    } = useAppInitializer();

    const {
        handleAction: getSubscriptionPlan, data, loading,
    } = useQueryHook({
        query: graphqlQueries.contentStackQueries.FIND_SUBSCRIPTION_PLAN,
    });

    useEffect(() => {
        getSubscriptionPlan({
            variables: {
                environment: 'development',
                device: 'desktop',
            },
        });
        createCustomABTestingEvent();
        return () => {
            removeCustomABTestingEvent();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        handleRedirect,
        homePageCmsData: data,
        homePageLoading: loading,

    };
};

const ChooseYourPlanLayoutFunc = { useSubscriptionPlanLayout };

export default ChooseYourPlanLayoutFunc;
