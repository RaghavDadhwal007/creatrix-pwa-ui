import types from 'redux/types';

const setAlert = (obj) => ({
    type: types.utilityAlert.SET_ALERT_DATA,
    payload: obj,
});

const clearAlert = () => ({
    type: types.utilityAlert.CLEAR_ALERT_DATA,
});

const UtilityAlertActions = {
    clearAlert,
    setAlert,
};

export default UtilityAlertActions;
