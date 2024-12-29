import config from 'config';
import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import refetchDataActions from 'redux/actions/refetchData.actions';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import * as Yup from 'yup';

const useNewProjectHook = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const { callApi } = useCustomAxiosCall();
    const fieldTypes = [
        {
            name: 'project_name',
            type: 'text',
            label: 'Project name',
            id: 0,
            disabled: false,
            initialvalue: '',
            isRequired: true,
        },
    ];
    const reduxDispatch = useDispatch();

    const handleNewProject = async (values, { resetForm }) => {
        setIsLoading(true);
        await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/add-group`,
                method: 'POST',
            },
            body: {
                name: values.project_name,
            },
        });
        setIsLoading(false);
        resetForm();
        reduxDispatch(UtilityModalActions.clearModal());
        reduxDispatch(refetchDataActions.refetchData());
    };

    const validation = Yup.object().shape({
        project_name: Yup.string()
            .required('project name is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleNewProject, fieldTypes, {
        validationSchema: validation,
    });

    return {
        handleSubmit,
        fieldTypes,
        formikProps,
        isLoading,
    };
};

export default useNewProjectHook;
