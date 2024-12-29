import React from 'react';
import SignUpForm from 'src/layouts/AuthForms/SignUpForm/SignUpForm';
import AuthDialog from '@components/AuthDialog/AuthDialog';
import { bool, func } from 'prop-types';
import { makeStyles } from '@mui/styles';
import styles from './layout/AuthDialogSignUpView.styles.default';

const useStyles = makeStyles(styles);

const AuthDialogSignUpView = ({ open, onClose }) => {
    const classes = useStyles();
    return (
        <AuthDialog open={open} onClose={onClose}>
            <div className={classes.signUpFormDialog}>
                <SignUpForm onClose={onClose} />
            </div>
        </AuthDialog>
    );
};

AuthDialogSignUpView.propTypes = {
    open: bool,
    onClose: func,
};

AuthDialogSignUpView.defaultProps = {
    open: false,
    onClose: () => {},
};
export default AuthDialogSignUpView;
