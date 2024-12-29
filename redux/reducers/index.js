import { combineReducers } from 'redux';
import abTestingReducer from './abtesting.reducer';
import appSettingReducer from './appSettings.reducer';
import subscriptionReducer from './checkout.reducer';
import projectPageRoutesReducer from './projectPageRoutes.reducer';
import refetchDataReducer from './refetchData.reducer';
import snackbarReducer from './snackbar.reducer';
import userReducer from './user.reducer';
import alertDataReducer from './utilityAlert.reducer';
import authModalReducer from './utilityModal.reducer';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    abTesting: abTestingReducer,
    userState: userReducer,
    authModal: authModalReducer,
    refetchData: refetchDataReducer,
    projectPageRoutes: projectPageRoutesReducer,
    alertData: alertDataReducer,
    checkout: subscriptionReducer,
    appSettings: appSettingReducer,
});

export default rootReducer;
