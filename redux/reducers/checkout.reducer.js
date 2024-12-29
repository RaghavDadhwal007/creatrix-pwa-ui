import types from 'redux/types';

const INIT_STATE = {
    subscriptionDetails: {},
};

const subscriptionReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.checkout.SET_SUBSCRIPTION_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default subscriptionReducer;
