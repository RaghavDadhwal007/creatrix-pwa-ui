import types from '../types';

const INIT_STATE = {
    routes: [],
};

const projectPageRoutesReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.projectPageRoutes.SET_ROUTES:
            return {
                ...state,
                routes: state.routes.concat(action.payload),
            };
        case types.projectPageRoutes.CLEAR_ROUTES:
            return INIT_STATE;
        default:
            return state;
    }
};

export default projectPageRoutesReducer;
