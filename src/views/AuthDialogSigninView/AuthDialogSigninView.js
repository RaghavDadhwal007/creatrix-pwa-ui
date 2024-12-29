import React from 'react';
import SignInForm from 'src/layouts/AuthForms/SignInForm/SignInForm';
import AuthDialog from '@components/AuthDialog/AuthDialog';
import { makeStyles } from '@mui/styles';
import { bool, func } from 'prop-types';
import styles from './layout/AuthDialogSigninView.styles.default';

const useStyles = makeStyles(styles);

const AuthDialogSigninView = ({ open, onClose }) => {
    const classes = useStyles();
    return (
        <AuthDialog title="Welcome To Creatigo" open={open} onClose={onClose}>
            <div className={classes.signInFormDialog}>
                <SignInForm onClose={onClose} />
            </div>
        </AuthDialog>
    );
};

AuthDialogSigninView.propTypes = {
    open: bool,
    onClose: func,
};

AuthDialogSigninView.defaultProps = {
    open: false,
    onClose: () => {},
};
export default AuthDialogSigninView;
