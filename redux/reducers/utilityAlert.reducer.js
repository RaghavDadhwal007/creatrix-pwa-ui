import types from 'redux/types';

const INIT_STATE = {
    open: false,
    success: true,
    message: '',
};

const UtilityAlertReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.utilityAlert.SET_ALERT_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case types.utilityAlert.CLEAR_ALERT_DATA:
            return {
                INIT_STATE,
            };
        default:
            return state;
    }
};

export default UtilityAlertReducer;
