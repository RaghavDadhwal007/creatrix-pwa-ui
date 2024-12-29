import types from 'redux/types';

const setModal = (obj) => ({
    type: types.utilityModal.SET_MODAL_DATA,
    payload: obj,
});

const clearModal = () => ({
    type: types.utilityModal.CLEAR_MODAL_DATA,
});

const UtilityModalActions = {
    clearModal,
    setModal,
};

export default UtilityModalActions;
