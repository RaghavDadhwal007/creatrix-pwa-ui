import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UtilityAlertActions from 'redux/actions/utilityAlert.action';

const usePaymentAlertMsgViewFunc = () => {
    const reduxDispatch = useDispatch();

    const onClose = () => {
        reduxDispatch(UtilityAlertActions.clearAlert());
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return {
        onClose,
    };
};
export default usePaymentAlertMsgViewFunc;
