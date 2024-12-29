import Button from '@components/Button/Button';
import Checkboxes from '@components/Checkbox/Checkbox';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import { func } from 'prop-types';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import SignInViewFunc from './functionality/SignInForm.func';
import styles from './layout/SignInForm.styles.default';

const useStyles = makeStyles(styles);

const SignInForm = ({
    onClose = () => {}, setLoading, loading, setDialogData,
}) => {
    const classes = useStyles();

    const { icons: { FacebookIcon, GoogleIcon } } = assets;
    const { useSignInFormHook } = SignInViewFunc;

    const {
        error, handleInputFocus, handleFacebookRedirect, fieldTypes, formikProps, handleSignIn, handleForgetPassModal, handleGoogleRedirect,
    } = useSignInFormHook({ onClose, setLoading, setDialogData });

    return (
        <>

            <form onSubmit={handleSignIn}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                    handleInputFocus={handleInputFocus}
                />
                <div className={classes.signinview_formactionbutton}>
                    <Checkboxes label="Remember me" size="small" />
                    <Typography
                        className={classes.signinview_forgetbutton}
                        onClick={() => handleForgetPassModal()}
                        type="caption"
                        isLink
                    >Forgot Password?
                    </Typography>
                </div>
                {error && <div className={classes.error}><Typography type="sub-title1">{error}</Typography></div>}
                <div className={classes.signinview_formsubmitbtnwrapper}>
                    <Button
                        className={classes.login_btn}
                        onClick={handleSignIn}
                        type="primary-btn"
                        disabled={loading}
                    >
                        {loading ? <CircularLoading type="small" /> : 'Log In'}
                    </Button>
                </div>
            </form>
            <div className={classes.signinView_optionText}>
                <Typography type="caption">- Or continue with -</Typography>
            </div>
            <div className={classes.signinView_btnContainer}>
                <div className={classes.googleBtn}>
                    <Button onClick={() => handleGoogleRedirect()} type="secondary-btn">
                        <GoogleIcon className={classes.socialIcon} />
                        <Typography type="link">Google</Typography>
                    </Button>
                </div>
                <div>
                    <Button onClick={() => handleFacebookRedirect()} type="secondary-btn">
                        <FacebookIcon className={classes.socialIcon} />
                        <Typography type="link">Facebook</Typography>
                    </Button>
                </div>
            </div>
        </>
    );
};
SignInForm.propTypes = {
    onClose: func,
};

SignInForm.defaultProps = {
    onClose: () => {},
};

export default SignInForm;
