import Button from '@components/Button/Button';
import { makeStyles } from '@mui/styles';
import styles from './layout/InnerModal.styles.default';

const useStyles = makeStyles(styles);

const InnerModal = ({ buttonTitle, children, onButtonClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {children}
            {buttonTitle && (
                <div className={classes.subscribeBtn}>
                    <Button type="tertiary-btn-1" onClick={onButtonClick}>{buttonTitle}</Button>
                </div>
            )}
        </div>
    );
};

export default InnerModal;
