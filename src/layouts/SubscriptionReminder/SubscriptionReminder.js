import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import styles from './layout/SubscriptionReminder.styles.default';

const useStyles = makeStyles(styles);

const SubscriptionReminder = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.subscriberTxt} type="sub-title-6">This is reminder to you please subscribe us
                for new update.
            </Typography>
            <div className={classes.subscribeBtn}>
                <Button type="tertiary-btn-1">Subscribe now</Button>
            </div>
        </div>
    );
};

export default SubscriptionReminder;
