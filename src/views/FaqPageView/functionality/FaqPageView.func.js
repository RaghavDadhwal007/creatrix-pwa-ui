import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useState } from 'react';
import * as Yup from 'yup';

const useFaqPageViewHook = (data) => {
    const [ filteredQuestions, setFilteredQuestions ] = useState(data);

    const { isMobile } = useDeviceTypeHook();

    const fieldTypes = [
        {
            name: 'email',
            type: 'text',
            placeholderText: 'Email',
            id: 0,
            rowwidth: 12,
            disabled: false,
            isRequired: true,
            className: 'darkTextField2',
            textFieldType: isMobile ? 'darkTextField' : '',
        },
        {
            name: 'message',
            type: 'text',
            placeholderText: 'Message',
            id: 1,
            rowwidth: 12,
            disabled: false,
            isRequired: true,
            className: 'darkTextField2',
            textFieldType: isMobile ? 'darkTextField' : '',
            textBox: true,

        },
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .required('Email is required'),
        message: Yup.string()
            .required('Message is required'),
    });

    const handleSubmitReport = (values) => console.log(values);

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSubmitReport, fieldTypes, { validationSchema: validation });

    const hanldeSearch = (e) => {
        const value = e?.target?.value?.trim();
        if (value === '') {
            setFilteredQuestions(data);
            return;
        }
        const newQuesarr = data?.filter((item) => item?.question.toLowerCase().includes(value.toLowerCase()) || item?.answer.toLowerCase().includes(value.toLowerCase()));
        setFilteredQuestions(newQuesarr);
    };

    return {
        filteredQuestions,
        hanldeSearch,
        fieldTypes,
        formikProps,
        handleSubmit,
    };
};

export default useFaqPageViewHook;
