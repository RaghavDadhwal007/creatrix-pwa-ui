import React from 'react';
import AuthDialog from '@components/AuthDialog/AuthDialog';
import { bool } from 'prop-types';
import ForgetPasswordLink from 'src/layouts/AuthForms/ForgetPasswordLink/ForgetPasswordLink';

const AuthDialogSForgotPasswordView = ({ open }) => (
    <AuthDialog title="Forgot password for Creatigo" open={open}>
        <ForgetPasswordLink />
    </AuthDialog>
);

AuthDialogSForgotPasswordView.propTypes = {
    open: bool,
};

AuthDialogSForgotPasswordView.defaultProps = {
    open: false,
};
export default AuthDialogSForgotPasswordView;
