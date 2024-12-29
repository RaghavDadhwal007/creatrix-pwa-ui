import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import styles from './layout/SubscriptionWarning.styles.default';

const useStyles = makeStyles(styles);

const SubscriptionWarning = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.subscriberTxt} type="sub-title-6">You need to be a subscriber to add to projects and download footage and music . Why join Creatigo ?</Typography>
            <div className={classes.subscribeBtn}>
                <Button type="tertiary-btn-1">Subscribe</Button>
            </div>
        </div>
    );
};

export default SubscriptionWarning;
