import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import userActions from 'redux/actions/user.actions';
import config from '../../../../config';

const useAppInnerWrapperFunc = () => {
    const { callApi } = useCustomAxiosCallHook();
    const reduxDispatch = useDispatch();

    const {
        userToken,
        userDetails = {},
    } = useSelector(({ userState }) => ({
        userToken: userState?.accessToken,
        userDetails: userState?.user,
    }));
    const fetchUserDetails = async () => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/profile`,
            },
        });
        if (response.status === 200) {
            const {
                first_name: firstName,
                last_name: lastName,
                pid,
                ...otherKeys
            } = response?.data?.data?.[ 0 ];
            const saveToReduxObj = {
                firstName,
                lastName,
                userId: pid,
                ...otherKeys,
            };
            reduxDispatch(userActions.updateUserObj(saveToReduxObj));
        }
    };

    useEffect(() => {
        if (userToken && !Object.hasOwn(userDetails, 'profile_image')) {
            fetchUserDetails();
        }
    }, [ ]);
};

const AppInnerWrapperFunc = {
    useAppInnerWrapperFunc,
};

export default AppInnerWrapperFunc;
