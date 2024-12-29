import routes from '@views/routes';
import { useCookies } from 'react-cookie';
import CustomNavigationHook from './customNavigationHook';

const withTokenWrapper = (Component) => {
    const Auth = (props) => {
        const { useNavigationHook } = CustomNavigationHook;
        const { handleRedirect } = useNavigationHook();
        const [ cookies ] = useCookies([ 'user' ]);
        const accessToken = cookies?.user?.accessToken;

        if (accessToken) {
            return (
                <Component {...props} />
            );
        }
        handleRedirect(routes.homepage.path);
        return false;
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withTokenWrapper;
