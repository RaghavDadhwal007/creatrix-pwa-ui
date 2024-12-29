import { array } from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import IndividualPlanCard from './IndividualPlanCard/IndividualPlanCard';
import ProPlanCard from './ProPlanCard/ProPlanCard';
import StarterPlanCard from './StarterPlanCard/StarterPlanCard';

const ChooseYourPlanBlocks = ({ handleCheckout, block }) => {
    let sorted = [];
    if (typeof block !== 'undefined') {
        sorted = [ ...block ].sort((a, b) => a.rank - b.rank);
    }
    const isSlugAvailable = useSelector(({ userState }) => userState?.userPlanData?.plan_short_name);

    const [ selected, setSelected ] = useState({
        individualPlanCard: false,
        starterPlanCard: true,
        proPlanCard: false,
    });

    return (
        <> {sorted?.map((item) => {
            switch (item?.shortName) {
                case 'individual_slug':
                    return (<IndividualPlanCard isSlugAvailable={isSlugAvailable} handleCheckout={handleCheckout} planData={item} selected={selected} setSelected={setSelected} />);
                case 'L30':
                    return <StarterPlanCard isSlugAvailable={isSlugAvailable} handleCheckout={handleCheckout} planData={item} selected={selected} setSelected={setSelected} />;
                case 'pro_pricing':
                    return <ProPlanCard isSlugAvailable={isSlugAvailable} handleCheckout={handleCheckout} planData={item} selected={selected} setSelected={setSelected} />;
                default:
                    return null;
            }
        })}
        </>
    );
};

ChooseYourPlanBlocks.propTypes = {
    block: array,
};

ChooseYourPlanBlocks.defaultProps = {
    block: [],
};

export default ChooseYourPlanBlocks;
