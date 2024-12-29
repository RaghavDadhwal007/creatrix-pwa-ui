import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';

const useAppWrapperFunc = () => {
    const reduxDispatch = useDispatch();

    const {
        userToken,
    } = useSelector(({ userState }) => ({
        userToken: userState?.accessToken,
    }));
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 6e4);
        if (count === 15) {
            if (userToken) {
                reduxDispatch(UtilityModalActions.setModal({
                    open: true,
                    type: 'plan_reminder',
                }));
            }         else {
                reduxDispatch(UtilityModalActions.setModal({
                    open: true,
                    type: 'subscription_reminder',
                }));
            }
        }
        return () => clearTimeout(timer);
    }, [ count ]);
};

const AppWrapperFunc = {
    useAppWrapperFunc,
};

export default AppWrapperFunc;
