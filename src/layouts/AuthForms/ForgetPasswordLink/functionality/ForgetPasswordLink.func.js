import useFormikFormHook from 'hooks/customFormikFormHook';
import * as Yup from 'yup';
import CustomNavigationHook from 'hooks/customNavigationHook';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import routes from '@views/routes';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import config from '../../../../../config';

const useResetPasswordLinkHook = ({ setDialogData, setDialogOpen, setLoading }) => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { callApi } = useCustomAxiosCallHook();
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();

    const handleResetPasswordLinkSubmitHandler = async (values) => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/forgot-password`,
                method: 'POST',
            },
            body: {
                email: values.email,
            },
        });
        setLoading(false);
        if (response?.status === 200) {
            setDialogData({
                open: true,
                success: true,
                title: 'Success',
                description: 'Link sent to your Email successfully',
                onClose: () => handleRedirect(routes?.signIn?.path),
            });
        } else {
            setError(response?.data?.message || 'Something went wrong');
        }
        setDialogOpen(true);
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
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Provide a valid mail')
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleResetPasswordLinkSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    return {
        formikProps,
        handleResetPasswordLink: handleSubmit,
        fieldTypes,
        handleRedirect,
        error,
        handleInputFocus,
    };
};

const ForgetPasswordLinkFunc = { useResetPasswordLinkHook };

export default ForgetPasswordLinkFunc;
