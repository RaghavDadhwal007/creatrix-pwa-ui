import { makeStyles } from '@mui/styles';
import HeaderView from '@views/HeaderView/HeaderView';
import UtilityAlertMsgView from '@views/UtilityAlertMsgView/UtilityAlertMsgView';
import UtilityModals from '../UtilityModals/UtilityModals';
import Footer from '../Footer/Footer';
import AppInnerWrapperFunc from './functionality/AppInnerWrapper.func';
import styles from './layout/AppInnerWrapper.styles.default';

const useStyles = makeStyles(styles);

const AppInnerWrapper = ({
    children,
}) => {
    const classes = useStyles();
    const { useAppInnerWrapperFunc } = AppInnerWrapperFunc;
    useAppInnerWrapperFunc();
    return (
        <div className={classes.innnerAppBlackBackgroundWrapper}>
            <div className={classes.innnerAppImageBackgroundWrapper}>
                <HeaderView />
                <UtilityAlertMsgView />
                <UtilityModals />
                <div className={classes.innerWrapper}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppInnerWrapper;
