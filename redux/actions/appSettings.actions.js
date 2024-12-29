import types from 'redux/types';

const setCMSData = (obj) => ({
    type: types.appSettings.SET_CMS_DATA,
    payload: obj,
});

const appSettingActions = {
    setCMSData,
};

export default appSettingActions;
