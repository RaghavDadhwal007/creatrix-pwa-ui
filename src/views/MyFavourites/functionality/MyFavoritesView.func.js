import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useEffect, useState } from 'react';

import config from '../../../../config';

const useMyFavourites = () => {
    const { callApi } = useCustomAxiosCallHook();
    const [ loading, setLoading ] = useState(false);
    const [ myFavouriteData, setMyFavouriteData ] = useState();
    const handleFetchPageData = async () => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/my-favorites`,
            },
        });

        if (response.status === 200) {
            setMyFavouriteData(response?.data?.data);
        }
        setLoading(false);
    };
    useEffect(() => {
        handleFetchPageData();
    }, []);

    return {
        myFavouriteData,
        loading,
    };
};

export default useMyFavourites;
