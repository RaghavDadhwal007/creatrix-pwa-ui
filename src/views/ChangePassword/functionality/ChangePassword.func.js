import useFormikFormHook from 'hooks/customFormikFormHook';
import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import helperFunctions from 'helperFunctions';
import removeWhiteSpace from '@components/Common/helper';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import config from '../../../../config';

const useChangePasswordHook = () => {
    const { callApi } = useCustomAxiosCall(false);
    const { passwordValidations, handlePasswordValidation } = helperFunctions;

    const validations = () => {
        const validStateFlags = {};
        passwordValidations().forEach((key) => {
            validStateFlags[ key.uid ] = false;
        });
        return validStateFlags;
    };

    const [ loading, setLoading ] = useState(false);
    const [ passwordValidation, setPasswordValidation ] = useState(validations());
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();

    const handleChangePasswordSubmitHandler = async (values) => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: { uri: `${ config.API_BASE_URL }/change-password`, method: 'POST' },
            body: {
                current_password: removeWhiteSpace(values.current_password),
                new_password: removeWhiteSpace(values.new_password),
                confirm_password: removeWhiteSpace(values.confirm_password),
            },
            flag: {
                showSnackBar: false,
                sendToken: true,
            },
        });
        if (response?.status !== 200) {
            setError('Current Password is not correct');
        }
        setLoading(false);
    };

    const fieldTypes = [
        {
            name: 'current_password',
            type: 'password',
            label: 'Current Password',
            placeholderText: 'Current password',
            id: 1,
            rowWidth: 6,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            textFieldType: 'darkTextField',
        },
        {
            name: 'new_password',
            type: 'password',
            label: 'New Password',
            placeholderText: 'New Password',
            id: 2,
            rowWidth: 6,
            disabled: false,
            initialvalue: '',
            isRequired: true,
            textFieldType: 'darkTextField',
            showValidationsRule: true,
        },
        {
            name: 'confirm_password',
            type: 'password',
            label: 'Confirm Password',
            placeholderText: 'Confirm Password',
            id: 3,
            rowWidth: 6,
            disabled: false,
            readOnly: false,
            initialvalue: '',
            isRequired: true,
            textFieldType: 'darkTextField',
        },
    ];

    const validation = Yup.object().shape({
        current_password: Yup.string()
            .required('Current Password is required'),
        new_password: Yup.string()
            .min(8, 'Password is short')
            .matches(/(?=.*[a-z])/, 'please enter a lowercase')
            .matches(/[*@!#%&()^~{}]+/, 'please enter a special character')
            .matches(/(?=.*[A-Z])/, 'please enter an uppercase')
            .matches(/(?=.*\d)/, 'please enter a number')
            .required('Password is required'),
        confirm_password: Yup.string()
            .required('Confirm password is required')
            .oneOf([ Yup.ref('new_password') ], 'Passwords must match'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleChangePasswordSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    const { new_password: currentPassword } = formikProps.values;

    useEffect(() => {
        handlePasswordValidation(currentPassword, setPasswordValidation);
    }, [ currentPassword ]);

    return {
        fieldTypes,
        formikProps,
        handleChangePassword: handleSubmit,
        loading,
        passwordValidation,
        error,
        handleInputFocus,
    };
};

export default useChangePasswordHook;
