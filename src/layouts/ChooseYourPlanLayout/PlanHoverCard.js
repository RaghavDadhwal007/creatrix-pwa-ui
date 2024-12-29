import React from 'react';
import { useSelector } from 'react-redux';

const PlanHoverCard = ({ classes }) => {
    const isSlugAvailable = useSelector(({ userState }) => userState?.userPlanData?.plan_short_name);
    const isPremiumPlan = isSlugAvailable === 'pro_pricing';
    return (
        <div className={classes.portfolioHover}>
            <div className={classes.portfolioHoverContent}>
                You have Already this Plan.
                <br />
                {!isPremiumPlan
                    ? (
                        <div>Please upgrade your Subscription.</div>
                    ) : (
                        <div>Please refer to your friend.</div>
                    )}
            </div>
        </div>
    );
};

export default PlanHoverCard;
