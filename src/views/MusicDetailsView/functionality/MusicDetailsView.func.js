import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import routes from '@views/routes';
import config from 'config';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useCookies } from 'react-cookie';

const useMusicDetails = () => {
    const reduxDispatch = useDispatch();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const [ projectMenuAnchor, setProjectMenuAnchor ] = useState(null);
    const isProjectMenuOpen = Boolean(projectMenuAnchor);

    const [ downloadMenuAnchor, setDownloadMenuAnchor ] = useState(null);
    const isDownloadDropdownOpen = Boolean(downloadMenuAnchor);

    const { callApi } = useCustomAxiosCallHook();

    const [ myProjectList, setMyProjectList ] = useState();
    const [ myProjectListLoading, setMyProjectListLoading ] = useState(false);
    const [ cookies ] = useCookies([ 'user' ]);
    const accessToken = cookies?.user?.accessToken;

    const hanldeCloseProjectMenu = () => setProjectMenuAnchor(null);
    const handleCloseDownloadMenu = () => setDownloadMenuAnchor(null);

    const tagsArray = [ 'Bouncy', 'Bright', 'Playful', 'Quirky', 'Upbeat', 'Lave', 'Upbeat' ];
    const isRefetch = useSelector(({ refetchData }) => refetchData.isRefetch);

    const handleClick = (key) => {
        if (key === 'download') {
            if (accessToken) {
                handleRedirect(routes.checkout.path);
                return;
            }
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
        }
        if (key === 'add_to_projects') {
            if (accessToken) {
                reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'add_project' }));
                return;
            }
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
        }
        if (key === 'add_to_favourites') {
            if (accessToken) {
                return;
            }
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signin' }));
        }
    };
    const handleOpenProjectMenu = (e) => {
        if (accessToken) {
            setProjectMenuAnchor(e.currentTarget);
        } else {
            handleClick('download');
        }
    };

    const handleOpenDownloadMenu = (e) => {
        if (accessToken) {
            setDownloadMenuAnchor(e.currentTarget);
        } else {
            handleClick('download');
        }
    };

    const fetchProjectDetails = async () => {
        setMyProjectListLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/groups/0`,
            },
        });

        if (response.status === 200) {
            setMyProjectList(response?.data?.data);
        }
        setMyProjectListLoading(false);
    };

    const handleAddProjectDialogOpen = () => {
        hanldeCloseProjectMenu();
        handleClick('add_to_projects');
    };

    useEffect(() => {
        fetchProjectDetails();
    }, [ isRefetch ]);

    return {
        tagsArray,
        handleClick,
        isProjectMenuOpen,
        projectMenuAnchor,
        handleOpenProjectMenu,
        hanldeCloseProjectMenu,
        myProjectList,
        handleAddProjectDialogOpen,
        myProjectListLoading,
        downloadMenuAnchor,
        isDownloadDropdownOpen,
        handleCloseDownloadMenu,
        handleOpenDownloadMenu,
    };
};

export default useMusicDetails;
