import assets from 'assets';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';

const { useState } = require('react');

const useCardTypeIVHook = () => {
    const { images: { homePageAudioPlaceHolders: projectImageThumbnails, videoDefaultThumbnail }, icons: { DeleteIcon } } = assets;

    const [ projectThumbnails, setProjectThumbnails ] = useState(projectImageThumbnails || []);

    const reduxDispatch = useDispatch();

    // Thumbnails //
    useMemo(() => {
        if (projectImageThumbnails?.length <= 4) {
            setProjectThumbnails([ projectImageThumbnails?.[ 0 ] ]);
            return;
        }
        setProjectThumbnails(projectImageThumbnails?.splice(0, 4));
    }, [ projectImageThumbnails?.length ]);

    /// delete Handler //
    const handleDelete = async (e, projectId) => {
        e.stopPropagation();
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'delete_project', payload: { project_id: projectId } }));
    };

    return {
        DeleteIcon,
        projectThumbnails,
        videoDefaultThumbnail,
        handleDelete,
    };
};

export default useCardTypeIVHook;
