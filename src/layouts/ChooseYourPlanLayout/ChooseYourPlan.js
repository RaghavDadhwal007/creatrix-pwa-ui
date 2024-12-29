import { makeStyles } from '@mui/styles';
import React from 'react';
import { Grid } from '@mui/material';
import styles from './layout/ChooseYourPlanLayout.styles.default';
import ChooseYourPlanBlocks from './ChooseYourPlanBlocks';
import ChooseYourPlanLayoutFunc from './functionality/ChooseYourPlanLayout.func';

const useStyles = makeStyles(styles);

const ChooseYourPlanLayout = ({ handleCheckout }) => {
    const classes = useStyles();
    const { useSubscriptionPlanLayout } = ChooseYourPlanLayoutFunc;
    const { homePageCmsData } = useSubscriptionPlanLayout();
    return (
        <div className={classes.root}>
            <Grid container className={classes.planCardContainer} justifyContent="center">
                <ChooseYourPlanBlocks handleCheckout={handleCheckout} block={homePageCmsData?.findSubscriptionPlan} />
            </Grid>
        </div>
    );
};

export default ChooseYourPlanLayout;
