import Button from '@components/Button/Button';
import { Grid } from '@mui/material';
import { array, func, string } from 'prop-types';
import React from 'react';

const CheckoutTabs = ({
    tabs,
    selectedTab,
    setSelectedTab,
}) => (
    <Grid container justifyContent="center" columnSpacing={5}>
        {tabs.map((tab, index) => {
            const isSelected = tab?.id === selectedTab;
            return (
                <Grid item key={tab?.id}>
                    <Button disableRipple onClick={() => setSelectedTab(tab?.id)} type={isSelected ? 'text-btn2-selected' : 'text-btn2'}>{`${ index + 1 }. ${ tab?.title }`}</Button>
                </Grid>
            );
        })}
    </Grid>
);

CheckoutTabs.propTypes = {
    tabs: array.isRequired,
    selectedTab: string.isRequired,
    setSelectedTab: func.isRequired,
};

export default CheckoutTabs;
