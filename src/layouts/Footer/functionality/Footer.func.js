import graphqlQueries from 'graphql/queries';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useQueryHook } from 'hooks/customGqlHook';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useFooterHook = () => {
    const { currentViewport } = useDeviceTypeHook();
    const device = currentViewport === 'mobile' ? 'mobile' : 'desktop';
    const {
        handleAction: getFooterContent, data, loading,
    } = useQueryHook({
        query: graphqlQueries.contentStackQueries.FIND_FOOTER,
    });

    const [ footer, setFooter ] = useState({ ...data?.findFooter?.content?.entries[ 0 ] });

    useEffect(() => {
        getFooterContent({
            variables: {
                environment: 'development',
                device,
            },
        });
    }, []);

    useEffect(() => {
        if (!loading && data?.findFooter) {
            setFooter({ footer_top: data?.findFooter?.content?.entries[ 0 ]?.footer_top, footer_bottom: data?.findFooter?.content?.entries[ 0 ]?.footer_bottom });
        }
    }, [ data, loading ]);

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
        loading,
        footer,
    };
};

export default useFooterHook;
