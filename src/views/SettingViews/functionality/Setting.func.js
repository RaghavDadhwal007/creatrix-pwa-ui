import DownloadHistoryView from '@views/DownloadHistory/DownloadHistoryView';
import icons from 'assets/icons';
import { useRouter } from 'next/router';
import MyDetails from 'src/layouts/MyDetails/MyDetails';
import MyProjectsView from '@views/MyProjectsView/MyProjectsView';
import CustomNavigationHook from 'hooks/customNavigationHook';
import AppRoutes from '@views/routes';
import ChangePassword from '@views/ChangePassword/ChangePassword';
import YoutubeClaimSupportView from '@views/YoutubeClaimSupport/YoutubeClaimSupportView';
import GeneralSupportView from '@views/GeneralSupportView/GeneralSupportView';
import BillingSubscriptionView from '@views/BillingSubscriptionView/BillingSubscriptionView';

const useSettings = () => {
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const renderSettingItem = () => {
        if (router.query.index === 'my-details') {
            return (
                <MyDetails />
            );
        }
        if (router.query.index === 'my-projects') {
            return <MyProjectsView />;
        } if (router.query.index === 'billing-subscription') {
            return <BillingSubscriptionView />;
        } if (router.query.index === 'download-history') {
            return <DownloadHistoryView />;
        } if (router.query.index === 'youtube-claim-support') {
            return <YoutubeClaimSupportView />;
        }
        if (router.query.index === 'general-support') {
            return <GeneralSupportView />;
        }
        if (router.query.index === 'change-password') {
            return <ChangePassword />;
        }
        handleRedirect(AppRoutes.errorPage.path);
        return <></>;
    };
    const routes = {
        myDetails: {
            id: 1, name: 'My Details', path: '/my-details', icon: icons.Details,
        },
        changePassword: {
            id: 2, name: 'Change Password', path: '/change-password', icon: icons.Password,
        },
        myProjects: {
            id: 3, name: 'My Projects', path: '/my-projects', icon: icons.Projects,
        },
        myFavourites: {
            id: 4, name: 'My Favourites', path: '/my-favourites', icon: icons.Heart,
        },
        billingSubscription: {
            id: 5, name: 'Billing & Subscription', path: '/billing-subscription', icon: icons.Dollar,
        },
        downloadHistory: {
            id: 6, name: 'Download History', path: '/download-history', icon: icons.Download,
        },
        YoutubeClaimSupport: {
            id: 7, name: 'Youtube Claim Support', path: '/youtube-claim-support', icon: icons.YoutubeIcon,
        },
        generalSupport: {
            id: 8, name: 'General support', path: '/general-support', icon: icons.Setting,
        },
    };

    return {
        routes,
        renderSettingItem,
    };
};
export default useSettings;
