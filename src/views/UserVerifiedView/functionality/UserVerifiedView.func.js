import CustomNavigationHook from 'hooks/customNavigationHook';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import config from '../../../../config';

const useUserVerifiedView = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { callApi } = useCustomAxiosCallHook();
    const router = useRouter();

    const [ isUserVerified, setIsUserVerified ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleVerifyUser = async () => {
        const { token = '' } = router.query;
        setIsLoading(true);
        const verifiedData = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/creatigo-user-verify`,
                method: 'POST',
            },
            body: {
                code: token,
            },
        });
        if (verifiedData?.status === 200) {
            setIsUserVerified(true);
        } else {
            setIsUserVerified(false);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (router.isReady) {
            handleVerifyUser();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ router.isReady ]);

    return {
        handleRedirect,
        isLoading,
        isUserVerified,
    };
};

const UserVerifiedFunc = { useUserVerifiedView };

export default UserVerifiedFunc;
