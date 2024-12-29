import React from 'react';
import { makeStyles } from '@mui/styles';
import BillingSubscriptionDetails from 'src/layouts/BillingSubscriptionDetails/BillingSubscriptionDetails';
import styles from './layout/BillingSubscriptionView.styles.default';

const useStyles = makeStyles();

const BillingSubscriptionView = () => {
    const classes = useStyles(styles);
    return (
        <div className={classes.fullWidth}>
            <BillingSubscriptionDetails />
        </div>
    );
};

export default BillingSubscriptionView;
