import { useState, useEffect } from 'react';
import useCustomAxiosCall from 'hooks/customAxiosCallHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import config from '../../../../config';

const useAllProjectsHook = () => {
    const [ projectData, setProjectData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const { callApi } = useCustomAxiosCall();

    const accessToken  = useSelector(({ userState }) => userState.accessToken);
    const isRefetch = useSelector(({ refetchData }) => refetchData.isRefetch);

    const fetchData = async () => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/groups/0`,
            },
        });
        if (response.status === 200) {
            setProjectData(response?.data?.data);
            setLoading(false);
        }
        setLoading(false);
    };

    const reduxDispatch = useDispatch();

    const handleOpenProjectDialog = () => {
        if (accessToken) {
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'add_project' }));
            return;
        }
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'signup' }));
    };

    const navigationTabs = [
        {
            id: 0,
            title: 'My Projects',
            href: '/settings/my-projects',
        },
        {
            id: 1,
            name: 'All Projects',
        },
    ];

    useEffect(() => {
        fetchData();
    }, [ isRefetch ]);

    return {
        projectData,
        loading,
        handleRedirect,
        handleOpenProjectDialog,
        navigationTabs,
    };
};

export default useAllProjectsHook;
