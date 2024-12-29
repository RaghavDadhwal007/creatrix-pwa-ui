import types from 'redux/types';

const setABTesting = (obj) => ({
    type: types.abtesting.SET_ABTESTING_KEY,
    payload: {
        obj,
    },
});

const clearABTesting = () => ({
    type: types.abtesting.CLEAR_ABTESTING_KEY,
});

const ABTestingActions = {
    setABTesting,
    clearABTesting,
};

export default ABTestingActions;
