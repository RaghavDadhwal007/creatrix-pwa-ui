import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import graphQlSettings from 'graphql/settings';
import useUserHook from './CustomUserHook';

const useHandleError = () => {
    const { logoutUser } = useUserHook();

    const handleError = (error) => {
        if (error?.message) {
            if (error.message === 'INVALID_TOKEN') {
                logoutUser();
                return false;
            }
            return true;
        }
        return true;
    };

    return { handleError };
};

const useMutationHook = ({
    query = '', options = {}, onComplete = () => { },
}) => {
    const { handleError } = useHandleError();

    const handleOnQueryComplete = ({
        responseData, error,
    }) => {
        handleError(error);
        onComplete(responseData);
    };

    const [ handleAction, { loading, error } ] = useMutation(
        query,
        {
            ...options,
            onCompleted: (data) => handleOnQueryComplete({
                responseData: data, error,
            }),
            ...graphQlSettings.__graphQlConfigSettings,
        },
    );

    return {
        handleAction,
        loading,
        error,
    };
};

const useQueryHook = ({
    query = '', options = {}, onCompleted = () => { },
}) => {
    const { handleError } = useHandleError();

    const handleOnQueryComplete = ({
        responseData, error,
    }) => {
        handleError(error);
        onCompleted(responseData);
    };

    const [ handleAction, { loading, error, data } ] = useLazyQuery(
        query,
        {
            ...options,
            onCompleted: (responseData) => handleOnQueryComplete({
                responseData, error,
            }),
            ...graphQlSettings.__graphQlConfigSettings,
        },
    );

    return {
        handleAction,
        loading,
        data,
        error,
    };
};

const useCustomQuery = ({ query = '', variables =  { } }) => useQuery(
    query,
    {
        variables,
        ...graphQlSettings.__graphQlConfigSettings,
    },
);

export {
    useMutationHook, useQueryHook, useCustomQuery, useHandleError,
};
