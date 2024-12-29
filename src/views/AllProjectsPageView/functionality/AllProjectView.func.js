import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import UtilityModalActions from 'redux/actions/utilityModals.actions';
import config from '../../../../config';

const useAllProjectsViewHook = () => {
    const [ projectData, setMyProjectData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ projectName, setProjectName ] = useState('Project name');

    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const { callApi } = useCustomAxiosCallHook();
    const router = useRouter();
    const { project_id } = router.query;

    const [ cookies ] = useCookies([ 'user' ]);
    const accessToken = cookies?.user?.accessToken;

    const isRefetch = useSelector(({ refetchData }) => refetchData.isRefetch);

    const reduxDispatch = useDispatch();

    const fetchProjects = async () => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/bunch/groups/${ project_id }`,
            },
        });

        if (response.status === 200) {
            setMyProjectData(response?.data);
            setProjectName(response?.data?.group_name);
        }

        setLoading(false);
    };

    const handleNewGroupModalOpen = () => {
        if (accessToken) {
            reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'add_group' }));
            return;
        }
        reduxDispatch(UtilityModalActions.setModal({ open: true, type: 'sign_up' }));
    };

    useEffect(() => {
        fetchProjects();
    }, [ isRefetch ]);

    return {
        projectData,
        loading,
        handleNewGroupModalOpen,
        projectName,
        handleRedirect,
    };
};
const AllProjectsViewFunc = { useAllProjectsViewHook };

export default AllProjectsViewFunc;
