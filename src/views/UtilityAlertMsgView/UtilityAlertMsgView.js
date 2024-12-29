import React from 'react';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import styles from './layout/UtilityAlertMsgView.styles.default';
import usePaymentAlertMsgViewFunc from './functionality/UtilityAlertMsgView.func';

const useStyles = makeStyles(styles);

const PaymentAlertMsgView = () => {
    const { onClose } = usePaymentAlertMsgViewFunc();
    const classes = useStyles();
    const isAlertOpen = useSelector(({ alertData }) => alertData);

    if (isAlertOpen?.open) {
        return (
            <div className={classes.alertMsgContainer}>
                <div className={`${ classes.container } ${ isAlertOpen?.success ? 'success' : 'failed' }`}>
                    <div className={classes.paymentMsg}>
                        <Typography type="caption1">{isAlertOpen?.message}</Typography>
                        <CloseIcon onClick={onClose} className={classes.closeIcon} />
                    </div>
                </div>
            </div>
        );
    } return <></>;
};

export default PaymentAlertMsgView;
