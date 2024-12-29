import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UtilityAlertActions from 'redux/actions/utilityAlert.action';
import config from '../../../../config';

const useAddToProjectFunc = () => {
    const reduxDispatch = useDispatch();
    const { callApi } = useCustomAxiosCallHook();
    const [ addGroupMediaLoading, setAddGroupMediaLoading ] = useState(false);

    const addGroupMedia = async (assetId, groupId) => {
        setAddGroupMediaLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/add-group-media`,
                method: 'POST',
            },
            body: {
                content_type: 'videos',
                group_id: groupId,
                asset_id: assetId,
            },
        });
        if (response.status === 200) {
            reduxDispatch(UtilityAlertActions.setAlert({
                success: true,
                open: true,
                message: 'Video has been added to project successfully.',
            }));
        } else if (response?.data?.message === 'DUPLICATE')  {
            reduxDispatch(UtilityAlertActions.setAlert({
                success: false,
                open: true,
                message: 'Video already added to the selected Project.',
            }));
        } else {
            reduxDispatch(UtilityAlertActions.setAlert({
                success: false,
                open: true,
                message: 'Video could not be added, Please try again.',
            }));
        }
        setAddGroupMediaLoading(false);
    };
    return {
        addGroupMedia,
        addGroupMediaLoading,
    };
};

export default useAddToProjectFunc;
