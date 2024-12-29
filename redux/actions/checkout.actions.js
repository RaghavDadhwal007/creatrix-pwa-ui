import types from 'redux/types';

const setSubscriptionObj = (obj) => ({
    type: types.checkout.SET_SUBSCRIPTION_DATA,
    payload: obj,
});

const checkoutActions = {
    setSubscriptionObj,
};

export default checkoutActions;
