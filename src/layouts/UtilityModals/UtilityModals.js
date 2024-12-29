import AlertDialog from '@components/AlertDialog/AlertDialog';
import AuthDialog from '@components/AuthDialog/AuthDialog';
import NewGroupDialog from '@components/NewGroupDialog/NewGroupDialog';
import NewProjectDialog from '@components/NewProjectDialog/NewProjectDialog';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import ForgetPasswordForm from '../AuthForms/ForgetPasswordForm/ForgetPasswordForm';
import ForgetPasswordLink from '../AuthForms/ForgetPasswordLink/ForgetPasswordLink';
import SignInForm from '../AuthForms/SignInForm/SignInForm';
import SignUpForm from '../AuthForms/SignUpForm/SignUpForm';
import DeleteProjectModal from '../DeleteProjectModal/DeleteProjectModal';
import DownloadFootage from '../DownloadFootage/DownloadFootage';
import DownloadMusic from '../DownloadMusic/DownloadMusic';
import PaymentDecline from '../PaymentDecline/PaymentDecline';
import PlanReminder from '../PlanReminder/PlanReminder';
import SubscribeInfo from '../SubscribeInfo/SubscribeInfo';
import SubscriptionReminder from '../SubscriptionReminder/SubscriptionReminder';
import UserVerified from '../UserVerified/UserVerified';
import ViewProjects from '../ViewProjects/ViewProjects';
import useUtilityModalsFunc from './functionality/UtilityModals.func';
import styles from './layout/UtilityModals.styles.default';

const useStyles = makeStyles(styles);

const UtilityModals = () => {
    const classes = useStyles();
    const {
        modal,
        handleSignupModal,
        handleSignInModal,
        onClose,
        loading, setLoading,
        dialogData, setDialogData,
        checkoutRedirect,
    } = useUtilityModalsFunc();

    const renderAuthModal = () => {
        switch (modal.type) {
            case 'signin':
                return  (
                    <>
                        <SignInForm modal setLoading={setLoading} loading={loading} setDialogData={setDialogData} />
                        <div className={classes.modalActionText}>
                            <Typography isLink onClick={() => handleSignupModal()}>
                                New to Creatigo? Sign up
                            </Typography>
                        </div>
                    </>
                );

            case 'signup':
                return (
                    <>
                        <SignUpForm modal setLoading={setLoading} loading={loading} setDialogData={setDialogData} />
                        <div className={classes.modalActionText}>
                            <Typography isLink onClick={() => handleSignInModal()}>
                                Have an account? Sign in
                            </Typography>
                        </div>
                    </>
                );

            case 'forget_password':
                return (
                    <>
                        <ForgetPasswordLink modal setLoading={setLoading} loading={loading} setDialogData={setDialogData} />
                        <div className={classes.modalActionText}>
                            <Typography isLink onClick={() => handleSignInModal()}>
                                Go back to login
                            </Typography>
                        </div>
                    </>
                );

            case 'reset_password':
                return (
                    <>
                        <ForgetPasswordForm modal setLoading={setLoading} loading={loading} setDialogData={setDialogData} />
                    </>
                );

            case 'login_wait_warning':
                return (
                    <>
                        <Typography>
                            Don&apos;t close the modal
                        </Typography>
                    </>
                );

            case 'user_verify':
                return  (
                    <>
                        <UserVerified />
                    </>
                );

            case 'download_music':
                return (<DownloadMusic />);

            case 'download_footage':
                return (<DownloadFootage />);

            case 'add_project':
                return (<NewProjectDialog />);

            case 'add_group':
                return (<NewGroupDialog />);

            case 'view_projects':
                return (<ViewProjects />);

            case 'subscribe_info':
                return (<SubscribeInfo onButtonClick={checkoutRedirect} />);

            case 'payment_decline':
                return (<PaymentDecline />);

            case 'subscription_reminder':
                return (<SubscriptionReminder />);

            case 'plan_reminder':
                return (<PlanReminder />);
            case 'delete_project':
                return (<DeleteProjectModal />);
            default:
                return null;
        }
    };

    const getModalTitle = () => {
        switch (modal.type) {
            case 'signin':
                return 'Log In';
            case 'signup':
                return 'Sign Up';
            case 'forget_password':
                return 'Forgot Password';
            case 'reset_password':
                return 'Reset Password';
            case 'login_wait_warning':
                return 'Logging You In';
            default:
                return '';
        }
    };

    return (
        <>
            <AuthDialog title={getModalTitle()} open={modal?.open} onClose={onClose} success={modal?.success} loading={loading}>
                <div className={classes.authModalDialog}>
                    {renderAuthModal()}
                </div>
            </AuthDialog>
            <AlertDialog {...dialogData} />
        </>
    );
};

export default UtilityModals;
