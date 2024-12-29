import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';

const useCardTypeIIHook = () => {
    const reduxDispatch = useDispatch();

    const handleDelete = async (e, projectId) => {
        e.stopPropagation();
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'delete_project', payload: { project_id: projectId } }));
    };

    return {
        handleDelete,
    };
};

export default useCardTypeIIHook;
