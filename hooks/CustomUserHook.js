import routes from '@views/routes';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import userActions from 'redux/actions/user.actions';
import UserSelector from 'redux/selectors/user.selector';
import CustomNavigationHook from './customNavigationHook';

const { useDispatch, useSelector } = require('react-redux');

const useUserHook = () => {
    const reduxDispatch = useDispatch();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const router = useRouter();
    const userToken = useSelector(UserSelector?.getUserAccessToken);
    // user state //
    const userData = useSelector(({ userState }) => userState?.user);

    const [ _, setCookie, removeCookie ] = useCookies([ 'user' ]);
    // logout user
    const logoutUser = () => {
        removeCookie('user');
        reduxDispatch(userActions.clearUserObj());
        handleRedirect(routes.homepage.path);
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
    };

    const saveUserToRedux = (response) => {
        const {
            access_token: accessToken,
            refresh_token: refreshToken,
            payload: {
                first_name: firstName,
                last_name: lastName,
                email,
                registerAs,
                pid,
            },
        } = response;

        const saveToReduxObj = {
            accessToken,
            refreshToken,
            user: {
                firstName,
                lastName,
                userId: pid,
                email,
                registerAs,
            },
        };
        reduxDispatch(userActions.setUserObj(saveToReduxObj));
    };

    const saveUserPlanToRedux = (data) => {
        const {
            amount: plan_amount,
            currency: plan_currency,
            description: plan_description,
            download_limit: plan_download_limit,
            duration_days: plan_duration_days,
            name: plan_name,
            recurring_eligible: plan_recurring_eligible,
            short_name: plan_short_name,
        } = data;
        const savePlanToRedux = {
            userPlanData: {
                plan_amount,
                plan_currency,
                plan_description,
                plan_download_limit,
                plan_duration_days,
                plan_name,
                plan_recurring_eligible,
                plan_short_name,
            },
        };
        reduxDispatch(userActions.setUserObj(savePlanToRedux));
    };

    const loginUser = (response) => {
        setCookie('user', JSON.stringify({
            accessToken: response?.data?.access_token,
        }), {
            sameSite: true,
        });
        saveUserToRedux(response?.data);
        if (!router.isReady) return;
        router.reload();
    };

    return {
        logoutUser,
        userToken,
        saveUserToRedux,
        loginUser,
        userData,
        saveUserPlanToRedux,
    };
};

export default useUserHook;
