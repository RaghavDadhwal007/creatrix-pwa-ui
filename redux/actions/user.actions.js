import types from 'redux/types';

const setUserObj = (obj) => ({
    type: types.user.SET_USER_DATA,
    payload: obj,
});

const updateUserObj = (obj) => ({
    type: types.user.UPDATE_USER_DATA,
    payload: obj,
});

const clearUserObj = () => ({
    type: types.user.CLEAR_USER_DATA,
});

const userActions = {
    setUserObj,
    clearUserObj,
    updateUserObj,
};

export default userActions;
