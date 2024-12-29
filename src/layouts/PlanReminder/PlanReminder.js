import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import styles from './layout/PlanReminder.styles.default';

const useStyles = makeStyles(styles);

const PlanReminder = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.subscriberTxt} type="sub-title-6">This is reminder to you please purchase our plan
                for more services.
            </Typography>
            <div className={classes.subscribeBtn}>
                <Button type="tertiary-btn-1">Purchase now</Button>
            </div>
        </div>
    );
};

export default PlanReminder;
