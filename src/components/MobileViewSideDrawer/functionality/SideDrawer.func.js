import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';

const useSideDrawerFunc = () => {
    const reduxDispatch = useDispatch();

    const handleDialogOpen = (cmsElem) => {
        if (cmsElem === 'Login') { reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' })); }
        if (cmsElem === 'sign up') { reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signup' })); }
    };

    return {
        handleDialogOpen,
    };
};

export default useSideDrawerFunc;
