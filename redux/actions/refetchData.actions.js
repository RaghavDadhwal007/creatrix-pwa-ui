import types from 'redux/types';

const refetchData = () => ({
    type: types.refetchData.REFETCH_API_DATA,
});

const refetchDataActions = {
    refetchData,
};

export default refetchDataActions;
