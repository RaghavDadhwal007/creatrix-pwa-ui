import useFormikFormHook from 'hooks/customFormikFormHook';
import * as Yup from 'yup';

const useFooterHook = () => {
    const handleSubmitHandler = (values) => {
        console.log(values);
    };

    const fieldTypes = [
        {
            name: 'email',
            type: 'text',
            placeholdertext: 'Email address',
            id: 0,
            disabled: false,
            initialvalue: '',
            isRequired: false,
            className: 'footerTextfield',
        },
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Provide a valid mail')
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    return {
        formikProps,
        handleSignUp: handleSubmit,
        fieldTypes,
    };
};

export default useFooterHook;
