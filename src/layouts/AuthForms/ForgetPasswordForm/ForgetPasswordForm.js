import Button from '@components/Button/Button';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import helperFunctions from 'helperFunctions';
import useResetPasswordFormHook from './functionality/ForgetPasswordForm.func';
import styles from './layout/ForgetPasswordForm.styles.default';

const useStyles = makeStyles(styles);

const ForgetPasswordForm = ({
    setDialogData, setDialogOpen, modal, setLoading, loading,
}) => {
    const classes = useStyles();
    const { passwordValidations } = helperFunctions;
    const {
        error, handleInputFocus, fieldTypes, formikProps, handleResetPassword,
        passwordValidation,
    } = useResetPasswordFormHook({
        setDialogData, setDialogOpen, modal, setLoading,
    });
    return (
        <div>
            <div className={classes.forgetpassword_subtitle}>
                <Typography type="sub-title3">Strong passwords include 8 characters, 1 number and
                    1 punctuation marks.
                </Typography>
            </div>
            <form onSubmit={handleResetPassword}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                    handleInputFocus={handleInputFocus}
                    passwordValidations={passwordValidations()}
                    passwordValidation={passwordValidation}
                    showValidation
                    isModal={false}
                />
                {error && <div className={classes.error}><Typography type="sub-title1">{error}</Typography></div>}
                <div className={classes.signupview_formsubmitbtnwrapper}>
                    <Button
                        onClick={handleResetPassword}
                        disabled={loading}
                        type="primary-btn"
                    >
                        {loading ? <CircularLoading type="small" /> : 'Reset Password'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordForm;
