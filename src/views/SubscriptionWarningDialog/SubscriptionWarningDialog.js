import React from 'react';
import SubscriptionWarning from 'src/layouts/SubscriptionWarning/SubscriptionWarning';
import AuthDialog from '@components/AuthDialog/AuthDialog';
import { bool, func } from 'prop-types';
import { makeStyles } from '@mui/styles';
import styles from './layout/SubscriptionWarningDialog.styles.default';

const useStyles = makeStyles(styles);

const SubscriptionWarningDialog = ({ open, onClose }) => {
    const classes = useStyles();
    return (
        <AuthDialog open={open} onClose={onClose}>
            <div className={classes.subscriptionWarningDialog}>
                <SubscriptionWarning onClose={onClose} />
            </div>
        </AuthDialog>
    );
};

SubscriptionWarningDialog.propTypes = {
    open: bool,
    onClose: func,
};

SubscriptionWarningDialog.defaultProps = {
    open: false,
    onClose: () => {},
};
export default SubscriptionWarningDialog;
