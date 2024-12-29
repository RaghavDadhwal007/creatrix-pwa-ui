import CustomNavigationHook from 'hooks/customNavigationHook';
import { useSelector } from 'react-redux';

const useDynamicBreadcrumbsHook = () => {
    const pageRoutes = useSelector(({ projectPageRoutes }) => projectPageRoutes.routes);

    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    return {
        pageRoutes,
        handleRedirect,
    };
};

export default useDynamicBreadcrumbsHook;
