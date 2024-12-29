import Typography from '@components/Typography/Typography';
import React from 'react';
import { makeStyles } from '@mui/styles';
import InnerModal from '../InnerModal/InnerModal';
import styles from './layout/PaymentDecline.styles.default';

const useStyles = makeStyles(styles);

const PaymentDecline = () => {
    const classes = useStyles();

    return (
        <InnerModal>
            <Typography className={classes.textWrapper}>
                Your payment has been
                declined. Please update
                payment method on your
                Billings & Subscriptions page.
            </Typography>
        </InnerModal>
    );
};

export default PaymentDecline;
