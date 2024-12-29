import types from 'redux/types';

const INIT_STATE = {
    user: {},
};

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.user.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case types.user.UPDATE_USER_DATA:
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
        case types.user.CLEAR_USER_DATA:
            return INIT_STATE;
        default:
            return state;
    }
};

export default userReducer;
