const { useEffect } = require('react');
const { useDispatch } = require('react-redux');

const useAppInitializer = () => {
    const dispatch = useDispatch();
    // this custom event will be used for trigering the varient on localhost to verify the changes on localhost

    const handleOptimize = (e) => {
        dispatch({ type: 'SET_ABTESTING_KEY', payload: e.detail });
    };
    const createCustomABTestingEvent = () => {
        if (typeof document !== 'undefined') {  document.addEventListener('optimizeTestEvent', handleOptimize); }
    };
    const removeCustomABTestingEvent = () => {
        if (typeof document !== 'undefined') { document.removeEventListener('optimizeTestEvent', handleOptimize); }
    };
    return {
        createCustomABTestingEvent,
        removeCustomABTestingEvent,
    };
};

export default useAppInitializer;
