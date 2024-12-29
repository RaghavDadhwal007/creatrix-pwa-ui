import types from 'redux/types';

const setProjectPageRoutes = (obj) => ({
    type: types.projectPageRoutes.SET_ROUTES,
    payload: obj,

});

const clearProjectPageRoutes = () => ({
    type: types.projectPageRoutes.CLEAR_ROUTES,
});

const projectPageRoutesActions = {
    setProjectPageRoutes,
    clearProjectPageRoutes,
};

export default projectPageRoutesActions;
