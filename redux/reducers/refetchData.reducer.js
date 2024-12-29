const { default: types } = require('redux/types');

const INIT_STATE = {
    isRefetch: false,
};

const refetchDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.refetchData.REFETCH_API_DATA:
            return {
                ...state,
                isRefetch: !state.isRefetch,
            };
        default:
            return state;
    }
};

export default refetchDataReducer;
