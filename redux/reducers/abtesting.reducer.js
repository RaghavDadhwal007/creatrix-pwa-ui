import types from 'redux/types';

const INIT_STATE = {

};

const abTestingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.abtesting.SET_ABTESTING_KEY:
            return {
                ...state,
                ...action.payload,
            };
        case types.abtesting.CLEAR_ABTESTING_KEY:
            return INIT_STATE;
        default:
            return state;
    }
};

export default abTestingReducer;
