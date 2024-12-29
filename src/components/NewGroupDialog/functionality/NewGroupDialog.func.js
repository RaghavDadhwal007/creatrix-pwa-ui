import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import refetchDataActions from 'redux/actions/refetchData.actions';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import * as Yup from 'yup';
import config from '../../../../config';

const useNewGroupHook = () => {
    const router = useRouter();
    const { project_id } = router.query;
    const [ isLoading, setIsLoading ] = useState(false);

    const { callApi } = useCustomAxiosCall();
    const fieldTypes = [
        {
            name: 'group_name',
            type: 'text',
            label: 'Group name',
            id: 0,
            disabled: false,
            initialvalue: '',
            isRequired: true,
        },
    ];
    const validation = Yup.object().shape({
        group_name: Yup.string()
            .required('group name is required'),
    });

    const reduxDispatch = useDispatch();

    const handleNewProject = async (values, { resetForm }) => {
        setIsLoading(true);
        await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/add-group`,
                method: 'POST',
            },
            body: {
                name: values.group_name,
                parent_id: project_id,
            },
        });
        setIsLoading(false);
        resetForm();
        reduxDispatch(UtilityModalActions.clearModal());
        reduxDispatch(refetchDataActions.refetchData());
    };

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleNewProject, fieldTypes, {
        validationSchema: validation,
    });
    return {
        fieldTypes,
        handleSubmit,
        formikProps,
        isLoading,
    };
};

export default useNewGroupHook;
