import routes from '@views/routes';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';

const useRightHeaderFunc = () => {
    const reduxDispatch = useDispatch();
    const { useNavigationHook  } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const handleDialogOpen = (cmsElem) => {
        if (cmsElem === 'Login') { reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' })); }
        if (cmsElem === 'subscribe') {
            handleRedirect(routes.checkout.path);
        }
        if (cmsElem === 'sign up') { reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signup' })); }
    };

    return {
        handleDialogOpen,
    };
};

export default useRightHeaderFunc;
