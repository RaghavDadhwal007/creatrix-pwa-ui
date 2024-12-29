import Button from '@components/Button/Button';
import Checkboxes from '@components/Checkbox/Checkbox';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import assets from 'assets';
import { useState } from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import Link from '@components/Link/Link';
import SignUpViewFunc from './functionality/SignUpForm.func';
import styles from './layout/SignUpForm.styles.default';

const useStyles = makeStyles(styles);

const SignUpForm = ({
    setDialogData, setLoading, loading,
}) => {
    const classes = useStyles();
    const { useSignUpFormHook } = SignUpViewFunc;
    const { icons: { FacebookIcon, GoogleIcon } } = assets;
    const {
        error, handleInputFocus, fieldTypes, formikProps, handleSignUp, handleFacebookRedirect,
        passwordValidation, showValidation, handleGoogleRedirect, passwordValidations,
    } = useSignUpFormHook({ setDialogData, setLoading });
    const [ checked, setChecked ] = useState(false);

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <form onSubmit={handleSignUp}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                    isModal
                    handleInputFocus={handleInputFocus}
                    passwordValidations={passwordValidations}
                    passwordValidation={passwordValidation}
                    showValidation={showValidation}
                />
                <div className={classes.signupview_formactionbutton}>
                    <Checkboxes
                        checked={checked}
                        handleChecked={handleChecked}
                    />
                    <Typography className={classes.signupview_policytext} type="caption">
                        I agree to our&nbsp;
                        <Link href={routes.terms.path} passHref>
                            <a target="_blank" href={routes.terms.path} rel="noreferrer">
                                Terms of Use
                            </a>
                        </Link>,&nbsp;
                        <Link href={routes.privacyPolicy.path}>
                            <a target="_blank" href={routes.privacyPolicy.path} rel="noreferrer">
                                Privacy Policy
                            </a>
                        </Link> and&nbsp;
                        <Link href={routes.licenceAgreement.path}>
                            <a target="blank" href={routes.licenceAgreement.path}>
                                Licensing Agreement
                            </a>
                        </Link>
                    </Typography>
                </div>
                {error && <div className={classes.error}><Typography type="sub-title1">{error}</Typography></div>}
                <div className={classes.signupview_formsubmitbtnwrapper}>
                    <Button
                        className={classes.signup_btn}
                        onClick={handleSignUp}
                        disabled={checked ? loading : 'disable'}
                        type="primary-btn"
                    >
                        {loading ? <CircularLoading type="small" /> : 'Sign Up'}
                    </Button>
                </div>
            </form>
            <div className={classes.signupView_optionText}>
                <Typography type="caption3">- Or sign up with -</Typography>
            </div>
            <div className={classes.signUpView_btnContainer}>
                <div className={classes.googleBtn}>
                    <Button onClick={() => handleGoogleRedirect()} type="secondary-btn">
                        <GoogleIcon className={classes.socialIcon} />
                        <Typography type="link">Google</Typography>
                    </Button>
                </div>
                <div className={classes.fbBtn}>
                    <Button onClick={() => handleFacebookRedirect()} type="secondary-btn">
                        <FacebookIcon className={classes.socialIcon} />
                        <Typography type="link">Facebook</Typography>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
