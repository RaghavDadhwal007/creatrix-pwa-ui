import Button from '@components/Button/Button';
import React from 'react';
import { useSelector } from 'react-redux';

const SubscriptionHeaderButtons = ({ menus, handleDialogOpen, userData }) => {
    const isProPlan = useSelector(({ userState }) => userState?.userPlanData?.plan_short_name === 'pro_pricing');
    const userSubscriptionData = useSelector(({ userState }) => userState?.userPlanData);
    const isUserAuthanticated = typeof userData?.accessToken !== 'undefined';
    const isUserLogin = (userSubscriptionData && isUserAuthanticated) || false;

    return (
        <>
            {isUserLogin ? (
                <Button
                    key={menus?.menu_groups._metadata.uid}
                    type="tertiary-btn"
                    onClick={() => handleDialogOpen(menus?.menu_groups?.heading_link?.title?.toLowerCase())}
                >
                    {isProPlan ? 'Refer to Friend' : 'Upgrade Your Plan'}
                </Button>
            ) : (
                <Button
                    key={menus?.menu_groups._metadata.uid}
                    type="tertiary-btn"
                    onClick={() => handleDialogOpen(menus?.menu_groups?.heading_link?.title?.toLowerCase())}
                >
                    {menus?.menu_groups?.heading_link?.title}
                </Button>
            )}
        </>
    );
};

export default SubscriptionHeaderButtons;
