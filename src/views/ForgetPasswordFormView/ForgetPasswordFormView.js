import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import styles from './layout/ForgetPasswordFormView.styles.default';

const useStyles = makeStyles(styles);

const ForgetPasswordFormView = () => {
    const classes = useStyles();
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect }  = useNavigationHook();
    const { token } = router.query;
    if (token) {
        handleRedirect(routes.homepage.path, { resetPasswordToken: token }, routes.homepage.path);
    } else {
        handleRedirect(routes.homepage.path, { forgetPassword: true }, routes.homepage.path);
    }

    return (
        <div className={classes.fullWidth}>
            Redirecting..
        </div>
    );
};

export default ForgetPasswordFormView;
