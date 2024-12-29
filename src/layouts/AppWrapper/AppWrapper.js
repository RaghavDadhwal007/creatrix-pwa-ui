import { makeStyles } from '@mui/styles';
import 'react-loading-skeleton/dist/skeleton.css';
import AppInnerWrapper from '../AppInnerWrapper/AppInnerWrapper';
import AppWrapperFunc from './functionality/AppWrapper.func';
import styles from './layout/AppWrapper.styles.default';

const useStyles = makeStyles(styles);

const AppWrapper = ({
    children,
}) => {
    const { useAppWrapperFunc } = AppWrapperFunc;
    useAppWrapperFunc();
    const classes = useStyles();
    const renderLayout = () => (
        <AppInnerWrapper>
            {children}
        </AppInnerWrapper>
    );

    return (
        <div className={classes.appwrapper_container}>
            {renderLayout()}
        </div>
    );
};

export default AppWrapper;
