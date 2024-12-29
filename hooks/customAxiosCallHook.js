import Axios from 'axios';
import { useCookies } from 'react-cookie';
import useUserHook from './CustomUserHook';

const useCustomAxiosCall = (logoutOnError = true) => {
    const [ cookies ] = useCookies([ 'user' ]);
    const { logoutUser } = useUserHook();

    const accessToken = cookies?.user?.accessToken;
    /*
        func getDefaultHeaders: this function will get the auth header token
    */
    const getDefaultHeaders = () => ({
        Authorization: `Bearer ${ accessToken }`,
    });

    /*
        func: callAxiosApi is a generic function
            with axios package integrated with it

            // function body structure
            uriEndPoint: {
                uri: url of the api call
                method: method of the call (GET, POST, etc)
                headerProps: if have any
            }
            body: {
                // json body to be passed on the api
            }
    */
    const callAxiosApi = ({
        uriEndPoint = {
            uri: '', method: 'GET', headerProps: {},
        },
        body,
        flag,
    }) => {
        const headers = flag?.sendToken ? {
            ...getDefaultHeaders(),
            ...uriEndPoint.headerProps,
        } : {
            ...uriEndPoint.headerProps,
        };
        return Axios({
            method: uriEndPoint.method || 'GET',
            url: uriEndPoint.uri || '',
            headers,
            data: body || undefined,
        });
    };

    /*
        func callApi: this function is a wrapper to the
            callAxiosApi, in this function we are handling error
            with toast, if there is an error we are raising toast
            else we are returning the response
    */
    const callApi = ({
        uriEndPoint = {
            uri: '', method: 'GET', headerProps: {},
        },
        body,
        flag = {
            sendToken: true,
            showSnackBar: true,
        },
    }) => callAxiosApi({
        uriEndPoint,
        body,
        flag,
    }).then((resp) => resp)
        .catch((err) => {
            if (err?.response?.data?.message === 'INVALID_TOKEN') {
                if (logoutOnError) {
                    logoutUser();
                }
            }
            return err?.response;
        });

    return {
        callApi,
        getDefaultHeaders,
    };
};

export default useCustomAxiosCall;
