import removeWhiteSpace from '@components/Common/helper';
import routes from '@views/routes';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import config from '../../../../../config';

const useSignUpFormHook = ({ setDialogData, setLoading }) => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { callApi } = useCustomAxiosCallHook();
    const reduxDispatch = useDispatch();
    const [ openDialog, setOpenDialog ] = useState(false);
    const [ showValidation, setShowValidation ] = useState(false);
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();

    const [ passwordValidation, setPasswordValidation ] = useState({
        lowercase: false,
        special: false,
        uppercase: false,
        minimum8: false,
        number: false,
    });
    const router = useRouter();

    const handleDialogClose = (value) => {
        setOpenDialog(value);
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
    const handleDialogOk = () => {
        handleDialogClose(false);
        if (!router.isReady) return;
        handleRedirect(routes.signIn.path);
    };
    const handleGoogleRedirect = async () => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/google/login`,
            },
        });
        if (response) {
            router.push(response.data.url);
        }
    };

    const handleSignUpSubmitHandler = async (values) => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/creatigo-user`,
                method: 'POST',
            },
            body: {
                email: removeWhiteSpace(values.email),
                password: removeWhiteSpace(values.password),
                first_name: removeWhiteSpace(values.firstName),
                last_name: removeWhiteSpace(values.lastName),
            },
        });
        setLoading(false);
        if (response?.status === 200) {
            handleDialogClose(true);
            setDialogData({
                open: true,
                success: true,
                title: 'Success',
                description: 'You have registered successfully, We have sent a verification link on you email',
                onClose: () => {
                    setDialogData((prevState) => ({ ...prevState, open: false }));
                    reduxDispatch(UtilityModalActions.clearModal());
                },
            });
        } else {
            setError(response?.data?.message || 'Something went wrong');
        }
    };

    const handleFocus = () => {
        setShowValidation(true);
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
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholdertext: 'Enter first name',
            id: 1,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            rowwidth: 6,
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholdertext: 'Enter last name',
            id: 2,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            rowwidth: 6,
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholdertext: 'Enter password',
            id: 3,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            rowwidth: 6,
            onFocus: handleFocus,
        },
        {
            name: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            placeholdertext: 'Enter password',
            id: 4,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            rowwidth: 6,
            showValidationsRule: true,
        },
    ];

    const passwordValidations = [
        {
            id: 1,
            text: 'One lowercase character',
            uid: 'lowercase',
        },
        {
            id: 2,
            text: 'One special character',
            uid: 'special',
        },
        {
            id: 3,
            text: 'One uppercase character',
            uid: 'uppercase',
        },
        {
            id: 4,
            text: '8 characters minimum',
            uid: 'minimum8',
        },
        {
            id: 5,
            text: 'One number',
            uid: 'number',
        },
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Provide a valid mail')
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
        firstName: Yup.string()
            .min(4, 'too short')
            .max(26, 'too long')
            .required('First name is required'),
        lastName: Yup.string()
            .min(4, 'too short')
            .max(26, 'too long')
            .required('Last name is required'),
        password: Yup.string()
            .min(8, 'Password is short')
            .matches(/(?=.*[a-z])/, 'please enter a lowercase')
            .matches(/[*@!#%&()^~{}]+/, 'please enter a special character')
            .matches(/(?=.*[A-Z])/, 'please enter an uppercase')
            .matches(/(?=.*\d)/, 'please enter a number')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([ Yup.ref('password') ], 'Your passwords do not match.'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSignUpSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    const { password: currentPassword } = formikProps.values;

    const handlePassowordValidation = (pass) => {
        const checkLowercase = /(?=.*[a-z])/.test(pass);
        const checkSpecial = /[*@!#%&()^~{}]+/.test(pass);
        const checkUppercase = /(?=.*[A-Z])/.test(pass);
        const checkMinimum8 = pass.length >= 8;
        const checkNumber = /(?=.*\d)/.test(pass);

        setPasswordValidation((prevState) => ({
            ...prevState,
            lowercase: checkLowercase,
            special: checkSpecial,
            uppercase: checkUppercase,
            minimum8: checkMinimum8,
            number: checkNumber,
        }));
    };

    useEffect(() => () => setShowValidation(false), []);

    useEffect(() => {
        handlePassowordValidation(currentPassword);
    }, [ currentPassword ]);

    return {
        formikProps,
        handleSignUp: handleSubmit,
        fieldTypes,
        handleRedirect,
        openDialog,
        handleDialogClose,
        handleDialogOk,
        handleGoogleRedirect,
        passwordValidation,
        passwordValidations,
        showValidation,
        handleFacebookRedirect,
        error,
        handleInputFocus,
    };
};

const SignUpViewFunc = { useSignUpFormHook };

export default SignUpViewFunc;
