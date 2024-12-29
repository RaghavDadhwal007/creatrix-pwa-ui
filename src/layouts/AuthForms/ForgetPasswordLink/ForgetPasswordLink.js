import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import ForgetPasswordLinkFunc from './functionality/ForgetPasswordLink.func';
import styles from './layout/ForgetPasswordLink.styles.default';

const useStyles = makeStyles(styles);

const ForgetPasswordLink = ({
    setDialogData, setDialogOpen, setLoading, loading,
}) => {
    const classes = useStyles();
    const { useResetPasswordLinkHook } = ForgetPasswordLinkFunc;
    const {
        error, handleInputFocus, fieldTypes, formikProps, handleResetPasswordLink,
    } = useResetPasswordLinkHook({ setDialogData, setDialogOpen, setLoading });

    return (
        <div>
            <div className={classes.forgetpassword_subtitle}>
                <Typography type="sub-title3">Please enter the email associated with your account and we will email you a link to reset your password.</Typography>
            </div>
            <form onSubmit={handleResetPasswordLink}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                    handleInputFocus={handleInputFocus}
                />
                {error && <div className={classes.error}><Typography type="sub-title1">{error}</Typography></div>}
                <div className={classes.resetpasswordview_formsubmitbtnwrapper}>
                    <Button
                        onClick={handleResetPasswordLink}
                        disabled={loading}
                        type="primary-btn"
                    >
                        {loading ? <CircularLoading type="small" /> : 'Send Reset Link'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordLink;
