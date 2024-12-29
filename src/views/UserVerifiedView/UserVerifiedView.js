import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import styles from './layout/UserVerified.styles.default';

const useStyles = makeStyles(styles);

const UserVerifiedView = () => {
    const classes = useStyles();
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect }  = useNavigationHook();

    const { token = '' } = router.query;
    if (token) {
        handleRedirect(routes.homepage.path, { verifyToken: token }, routes.homepage.path);
    }

    return (
        <div className={classes.fullWidth}>
            Redirecting..
        </div>
    );
};

export default UserVerifiedView;
