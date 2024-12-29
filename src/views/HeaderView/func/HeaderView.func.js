import graphqlQueries from 'graphql/queries';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useState } from 'react';
import useUserHook from 'hooks/CustomUserHook';

const {  useCustomQuery } = require('hooks/customGqlHook');

const useHeaderView = () => {
    const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);
    const { currentViewport } = useDeviceTypeHook();
    const { logoutUser } = useUserHook();

    const device = currentViewport === 'mobile' ? 'mobile' : 'desktop';
    const {
        data, loading: isHeaderDataLoading,
    } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_HEADER,
        variables: {
            environment: 'development',
            device,
        },
    });
    const handleLogoutUser = () => {
        setIsDrawerOpen(false);
        logoutUser();
    };
    return {
        data: data?.findHeader || {},
        isHeaderDataLoading,
        isDrawerOpen,
        setIsDrawerOpen,
        handleLogoutUser,
    };
};

export default useHeaderView;
