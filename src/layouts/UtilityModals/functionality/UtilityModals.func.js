import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import useUserHook from 'hooks/CustomUserHook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import AuthModalSelector from 'redux/selectors/authModal.selector';
import CustomNavigationHook from 'hooks/customNavigationHook';
import routes from '@views/routes';
import config from '../../../../config';

const useUtilityModalsFunc = () => {
    const reduxDispatch = useDispatch();
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const [ loading, setLoading ] = useState(false);
    const [ dialogData, setDialogData ] = useState({
        open: false,
        success: false,
        title: '',
        description: '',
        onClose: () => {},
    });

    const {
        fbAuthToken, signup, gAuthToken, resetPasswordToken, forgetPassword, verifyToken, loginModal,
    } = router.query;
    const { callApi } = useCustomAxiosCall();
    const  {  loginUser }  =  useUserHook();
    const handleGoogleLogin = async (authCode) => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/google/login`,
                method: 'POST',
            },
            body: {
                code: authCode,
            },
        });
        if (response?.status === 200) {
            loginUser(response);
        } else {
            reduxDispatch(UtilityModalActions.clearModal());
        }
    };
    const handleFacebookLogin = async (authCode) => {
        if (typeof window !== 'undefined') {
            const response = await callApi({
                uriEndPoint: {
                    uri: `${ config.API_BASE_URL }/facebook/login`,
                    method: 'POST',
                },
                body: {
                    fbcode: authCode,
                    redirect: `${ window.location.href }signin?type=facebook`,
                },
            });
            if (response?.status === 200) {
                loginUser(response);
            } else {
                reduxDispatch(UtilityModalActions.clearModal());
            }
        }
    };
    // will render twice in development due to strict mode
    useEffect(() => {
        if (loginModal) {
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'signin',
            }));
        }
        if (fbAuthToken) {
            handleFacebookLogin(fbAuthToken);
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'login_wait_warning',
            }));
        }
        if (gAuthToken) {
            handleGoogleLogin(gAuthToken);
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'login_wait_warning',
            }));
        }
        if (resetPasswordToken) {
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'reset_password',
            }));
        }
        if (forgetPassword) {
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'forget_password',
            }));
        }
        if (verifyToken) {
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'user_verify',
            }));
        }
        if (signup) {
            reduxDispatch(UtilityModalActions.setModal({
                open: true,
                type: 'signup',
            }));
        }
    }, []);

    const modal = useSelector(AuthModalSelector?.getAuthModalState);

    const handleSignupModal = () => {
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signup' }));
    };
    const handleSignInModal = () => {
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
    };
    const onClose = () => {
        reduxDispatch(UtilityModalActions.clearModal());
    };

    const checkoutRedirect = () => {
        handleRedirect(routes.checkout.path);
        onClose();
    };

    return {
        modal,
        handleSignupModal,
        handleSignInModal,
        onClose,
        loading,
        setLoading,
        dialogData,
        setDialogData,
        checkoutRedirect,
    };
};
export default useUtilityModalsFunc;
