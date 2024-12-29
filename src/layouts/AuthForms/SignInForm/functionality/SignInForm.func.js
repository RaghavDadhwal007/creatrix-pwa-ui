import removeWhiteSpace from '@components/Common/helper';
import routes from '@views/routes';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import useUserHook from 'hooks/CustomUserHook';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import { useRouter } from 'next/router';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import * as Yup from 'yup';
import config from '../../../../../config';

const useSignInFormHook = ({ onClose, setLoading }) => {
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { callApi } = useCustomAxiosCallHook();
    const reduxDispatch = useDispatch();
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();
    const { loginUser, saveUserPlanToRedux } = useUserHook();

    const handleGoogleRedirect = async () => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/google/login`,
            },
        });
        if (response?.status === 200) {
            router.push(response.data.url);
        }
    };
    const handleFacebookRedirect = async () => {
        if (typeof window !== 'undefined') {
            const response = await callApi({
                uriEndPoint: {
                    uri: `${ config.API_BASE_URL }/facebook/login?redirect=${ window?.location?.href }signin?type=facebook`,
                },
            });
            if (response?.status === 200) {
                router.push(response?.data?.url);
            }
        }
    };
    const handleSignInSubmitHandler = async (values) => {
        setLoading(true);
        const loginData = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/login`,
                method: 'POST',
            },
            body: {
                username: removeWhiteSpace(values.email),
                password: removeWhiteSpace(values.password),
            },
        });
        if (loginData?.status === 200) {
            onClose(false);
            reduxDispatch(UtilityModalActions.clearModal());
            loginUser(loginData);
            if (loginData?.data?.access_token) {
                const fetchBillingDetails = async () => {
                    const response = await callApi({
                        uriEndPoint: {
                            headerProps: {
                                Authorization: `Bearer ${ loginData?.data?.access_token }`,
                            },
                            uri: `${ config.API_BASE_URL }/user-plan`,
                        },
                    });
                    if (response.status === 200) {
                        saveUserPlanToRedux(response?.data?.data);
                    } else {
                        setError(response?.data?.message);
                    }
                };
                fetchBillingDetails();
            }
        } else {
            setError(loginData?.data?.message);
        }
        setLoading(false);
    };

    const fieldTypes = [
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholdertext: 'creatigo@gmail.com',
            id: 0,
            disabled: false,
            initialvalue: '',
            isRequired: true,
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholdertext: 'Enter password',
            id: 1,
            disabled: false,
            initialvalue: '',
            isRequired: true,
        },
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Provide a valid mail')
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
        password: Yup.string()
            .min(5, 'too short')
            .max(26, 'too long')
            .required('Password is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSignInSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });
    const handleForgetPassModal = () => {
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'forget_password' }));
    };
    const handleTermsRedirect = () => {
        handleRedirect(routes.terms.path);
        reduxDispatch(UtilityModalActions.clearModal());
    };
    return {
        formikProps,
        handleSignIn: handleSubmit,
        fieldTypes,
        handleRedirect,
        handleGoogleRedirect,
        handleForgetPassModal,
        handleFacebookRedirect,
        handleTermsRedirect,
        error,
        handleInputFocus,
    };
};

const SignInViewFunc = { useSignInFormHook };

SignInViewFunc.propTypes = {
    onClose: func.isRequired,
};
export default SignInViewFunc;
