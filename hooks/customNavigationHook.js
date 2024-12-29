import { useRouter } from 'next/router';

const useNavigationHook = () => {
    const router = useRouter();

    /*
        func handleRedirect: will help to redirect to  the
            pages in our application
            this function also take query params as "options"
            also if there is any alias we can pass in the as

            more info at
            https://nextjs.org/docs/api-reference/next/router
    */
    const handleRedirect = (path, options, as) => {
        if (!router.isReady) return;
        if (typeof window !== 'undefined') {
            router.push({
                pathname: path,
                query: { ...options },

            }, as);
        }
    };

    /*
        func handleOpenLinkInNewTab: will open a path in new tab
    */
    const handleOpenLinkInNewTab = (path = '') => {
        window.open(path, '_blank')?.focus();
    };

    return {
        handleRedirect,
        handleOpenLinkInNewTab,
    };
};

const CustomNavigationHook =  { useNavigationHook };

export default CustomNavigationHook;
