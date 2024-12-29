import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import styles from './layout/SignInView.styles.default';

const useStyles = makeStyles(styles);

const SignInView = () => {
    const classes = useStyles();
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect }  = useNavigationHook();

    // let  paramsData = { dialog: 'signin' };
    const { code, type } = router.query;
    if (type === 'facebook' && code) {
        handleRedirect(routes.homepage.path, { fbAuthToken: code }, routes.homepage.path);
    } else if (code) {
        handleRedirect(routes.homepage.path, { gAuthToken: code }, routes.homepage.path);
    } else {
        handleRedirect(routes.homepage.path, { loginModal: true }, routes.homepage.path);
    }

    return (
        <div className={classes.fullWidth}>
            Redirecting..
        </div>
    );
};

export default SignInView;
