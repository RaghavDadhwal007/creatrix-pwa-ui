import { makeStyles } from '@mui/styles';
import { Alert as MuiAlert } from '@mui/material';
import { string } from 'prop-types';
import styles from './layout/Alert.styles.default';

const useStyles = makeStyles(styles);
const Alert = ({
    severity, message,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.alertWrapper}>
            <MuiAlert
                style={{
                    textTransform: 'capitalize',
                }}
                severity={severity}
            >
                {message?.toLocaleLowerCase()?.replace(/_/g, ' ')?.trim()}
            </MuiAlert>
        </div>
    );
};

export default Alert;

Alert.propTypes = {
    severity: string,
    message: string.isRequired,
};

Alert.defaultProps = {
    severity: 'info',
};
