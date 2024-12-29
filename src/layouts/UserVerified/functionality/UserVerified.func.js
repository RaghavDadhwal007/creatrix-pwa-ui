import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import useUserHook from 'hooks/CustomUserHook';
import config from '../../../../config';

const useUserVerifiedView = () => {
    const { callApi } = useCustomAxiosCallHook();
    const router = useRouter();

    const [ isUserVerified, setIsUserVerified ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const {
        verifyToken,
    } = router.query;
    const { loginUser } = useUserHook();
    const reduxDispatch = useDispatch();
    const handleRedirectTosignin = () => {
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
    };
    const handleVerifyUser = async () => {
        setIsLoading(true);
        const verifiedData = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/creatigo-user-verify`,
                method: 'POST',
            },
            body: {
                code: verifyToken,
            },
        });

        if (verifiedData?.status === 200) {
            setIsUserVerified(true);
            loginUser(verifiedData);
        } else {
            setIsUserVerified(false);
        }
        setIsLoading(false);
    };
    // render twice due to strict mode [ only in development mode ]
    useEffect(() => {
        if (router.isReady) {
            handleVerifyUser();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ router.isReady ]);

    return {
        isLoading,
        isUserVerified,
        handleRedirectTosignin,
    };
};

const UserVerifiedFunc = { useUserVerifiedView };

export default UserVerifiedFunc;
