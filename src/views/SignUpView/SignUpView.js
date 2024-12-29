import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import CustomNavigationHook from 'hooks/customNavigationHook';
import styles from './layout/SignUpView.styles.default';

const useStyles = makeStyles(styles);

const SignUpView = () => {
    const classes = useStyles();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    handleRedirect(routes.homepage.path, { signup: true }, routes.homepage.path);
    return (
        <div className={classes.fullWidth}>
            Redirecting...
        </div>
    );
};
export default SignUpView;
