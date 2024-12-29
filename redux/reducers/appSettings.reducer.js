import types from 'redux/types';

const INIT_STATE = {
    cmsData: {},
};

const appSettingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.appSettings.SET_CMS_DATA:
            return {
                ...state,
                cmsData: action.payload,
            };
        default:
            return state;
    }
};

export default appSettingReducer;
