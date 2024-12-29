import CustomNavigationHook from 'hooks/customNavigationHook';

const useErrorPageHook = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    return {
        handleRedirect,
    };
};

const ErrorPageViewFunc = { useErrorPageHook };

export default ErrorPageViewFunc;
