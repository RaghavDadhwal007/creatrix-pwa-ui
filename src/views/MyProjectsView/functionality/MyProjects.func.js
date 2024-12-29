import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import projectPageRoutesActions from 'redux/actions/projectPageRoutes.actions';
import config from '../../../../config';

const useMyProjectsHook = () => {
    const defaultLoadProjectsLen = 6;
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const [ loading, setLoading ] = useState(false);
    const [ myProjectList, setMyProjectList ] = useState([]);
    const { callApi } = useCustomAxiosCallHook();
    const [ nextProjectsLength, setNextProjectsLength ] = useState(defaultLoadProjectsLen);

    const accessToken  = useSelector(({ userState }) => userState.accessToken);
    const isRefetch = useSelector(({ refetchData }) => refetchData.isRefetch);

    const reduxDispatch = useDispatch();

    const fetchProjectDetails = async () => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/groups/0`,
            },
        });

        if (response.status === 200) {
            setMyProjectList(response?.data?.data);
        }
        setLoading(false);
    };

    const handleOpenProjectDialog = () => {
        if (accessToken) {
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'add_project' }));
            return;
        }
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signup' }));
    };

    const handleCardClick = (path, options, as, routeObj) => {
        handleRedirect(path, options, as);
        const routes = [
            {
                id: 1,
                title: 'My projects',
                href: '/settings/my-projects',
            },
            {
                id: 2,
                title: routeObj.title,
                href: `/projects/${ routeObj.project_id }`,
            },
        ];
        reduxDispatch(projectPageRoutesActions.setProjectPageRoutes(routes));
    };

    useEffect(() => {
        fetchProjectDetails();
        reduxDispatch(projectPageRoutesActions.clearProjectPageRoutes());
    }, [ isRefetch ]);

    const loadMoreProjects = () => {
        setNextProjectsLength(nextProjectsLength + defaultLoadProjectsLen);
    };

    return {
        loading,
        myProjectList,
        handleRedirect,
        handleCardClick,
        handleOpenProjectDialog,
        loadMoreProjects,
        nextProjectsLength,
    };
};

const MyProjectsFunc = { useMyProjectsHook };

export default MyProjectsFunc;
