import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import refetchDataActions from 'redux/actions/refetchData.actions';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import config from '../../../../config';

const useDeleteProjectModalHook = () => {
    const [ loading, setLoading ] = useState(false);
    const projectId = useSelector(({ authModal }) => authModal?.payload?.project_id);

    const { callApi } = useCustomAxiosCall();
    const reduxDispatch = useDispatch();

    const handleDelete = async () => {
        setLoading(true);
        await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/delete-group/${ projectId }`,
                method: 'DELETE',
            },
        });
        reduxDispatch(refetchDataActions.refetchData());
        reduxDispatch(UtilityModalActions.clearModal());
        setLoading(false);
    };

    const handleCancel = () => reduxDispatch(UtilityModalActions.clearModal());

    return {
        handleDelete,
        handleCancel,
        loading,
    };
};

export default useDeleteProjectModalHook;
