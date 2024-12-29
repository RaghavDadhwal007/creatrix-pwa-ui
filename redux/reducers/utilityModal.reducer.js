import types from 'redux/types';

const INIT_STATE = {
    open: false,
    success: true,
    type: '', // signin signup forget_password reset_password download_music, download_footage, add_project, view_projects, subscribe_info, payment_decline
    data: {

    },
};

const UtilityModalReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.utilityModal.SET_MODAL_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case types.utilityModal.CLEAR_MODAL_DATA:
            return {
                INIT_STATE,
            };
        default:
            return state;
    }
};

export default UtilityModalReducer;
