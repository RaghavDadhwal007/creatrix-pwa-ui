import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import UserVerifiedFunc from './functionality/UserVerified.func';
import styles from './layout/UserVerified.styles.default';

const useStyles = makeStyles(styles);

const UserVerifiedView = () => {
    const classes = useStyles();
    const { useUserVerifiedView } = UserVerifiedFunc;
    const { handleRedirectTosignin, isLoading, isUserVerified } = useUserVerifiedView();

    return (
        <>
            <div className={classes.main}>
                {isLoading ? (
                    <Typography className={classes.heading} type="heading">
                        Loading...
                    </Typography>
                ) : (
                    <Typography className={classes.heading} type="heading">
                        {isUserVerified ? 'You are Verified! Please Sign In to continue' : 'Something went wrong'}
                    </Typography>
                )}
                <Button
                    onClick={() => handleRedirectTosignin()}
                    disabled={isLoading}
                >
                    Sign In
                </Button>
            </div>
        </>
    );
};

export default UserVerifiedView;
