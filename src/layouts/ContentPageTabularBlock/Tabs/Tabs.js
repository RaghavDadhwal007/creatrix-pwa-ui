import Button from '@components/Button/Button';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { array, func, string } from 'prop-types';
import React from 'react';
import styles from '../layout/ContentPageTabularBlock.style.default';

const useStyles = makeStyles(styles);

const Tabs = ({
    tabs,
    selectedTab,
    setSelectedTab,
}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.tabsContainer}>
            {tabs.map((tab) => {
                const isSelected = tab === selectedTab;
                return (
                    <Grid item xs={3} key={tab} className={classes.tabs}>
                        <Button disableRipple onClick={() => setSelectedTab(tab)} type={isSelected ? 'text-btn2-selected' : 'text-btn2'}>{ tab }</Button>
                    </Grid>
                );
            })}
        </Grid>
    );
};

Tabs.propTypes = {
    tabs: array.isRequired,
    selectedTab: string.isRequired,
    setSelectedTab: func.isRequired,
};

export default Tabs;
