import routes from '@views/routes';
import helperFunctions from 'helperFunctions';
import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import * as Yup from 'yup';
import config from '../../../../../config';

const useResetPasswordFormHook = ({
    setDialogData, setDialogOpen, modal, setLoading,
}) => {
    const router = useRouter();
    const { resetPasswordToken } = router.query;

    const { useNavigationHook } = CustomNavigationHook;
    const { passwordValidations, handlePasswordValidation } = helperFunctions;
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();

    const validations = () => {
        const validStateFlags = {};
        passwordValidations().forEach((key) => {
            validStateFlags[ key.uid ] = false;
        });
        return validStateFlags;
    };

    const { handleRedirect } = useNavigationHook();
    const reduxDispatch = useDispatch();
    const { callApi } = useCustomAxiosCall();

    const [ passwordValidation, setPasswordValidation ] = useState(validations());

    const handleResetPasswordSubmitHandler = async (values) => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: { uri: `${ config.API_BASE_URL }/reset-password`, method: 'POST' },
            body: { token: resetPasswordToken, password: values?.password },
            flag: {
                showSnackBar: false,
            },
        });
        setLoading(false);
        if (response?.status === 200) {
            if (modal) {
                return reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
            }
            setDialogData({
                open: true,
                success: true,
                title: 'Success',
                description: 'Password updated successfully',
                onClose: () => handleRedirect(routes?.signIn?.path),
            });
        } else {
            setError(response?.data?.message || 'Password not updated successfully');
        }
        setDialogOpen(true);
        return null;
    };

    const fieldTypes = [
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholdertext: 'Enter password',
            id: 1,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            showValidationsRule: true,
        },
        {
            name: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            placeholdertext: 'Confirm Password',
            id: 2,
            disabled: false,
            initialvalue: '',
            isRequired: true,
        },
    ];

    const validation = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password is short')
            .matches(/(?=.*[a-z])/, 'please enter a lowercase')
            .matches(/[*@!#%&()^~{}]+/, 'please enter a special character')
            .matches(/(?=.*[A-Z])/, 'please enter an uppercase')
            .matches(/(?=.*\d)/, 'please enter a number')
            .required('This field is required'),
        confirmPassword: Yup.string()
            .required('This field is required')
            .oneOf([ Yup.ref('password') ], 'Your passwords do not match.'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleResetPasswordSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    const { password: currentPassword } = formikProps.values;

    useEffect(() => {
        handlePasswordValidation(currentPassword, setPasswordValidation);
    }, [ currentPassword ]);
    return {
        formikProps,
        handleResetPassword: handleSubmit,
        fieldTypes,
        passwordValidation,
        error,
        handleInputFocus,
    };
};

export default useResetPasswordFormHook;
