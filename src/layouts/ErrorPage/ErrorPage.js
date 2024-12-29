import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from '@components/Image/Image';
import assets from 'assets';
import routes from '@views/routes';
import styles from './layout/ErrorPage.styles.default';
import ErrorPageViewFunc from './functionality/ErrorPage.func';

const useStyles = makeStyles(styles);

const ErrorPage = () => {
    const { images: { discImage } } = assets;
    const classes = useStyles();
    const { useErrorPageHook } = ErrorPageViewFunc;
    const { handleRedirect } = useErrorPageHook();
    return (
        <Grid container className={classes.errorPageContainer}>
            <Grid item xs={12} sm={6}>
                <div className={classes.errorText}>
                    <Typography type="big-title-1">Oops, 404 error</Typography>
                    <div className={classes.errorTitle}>
                        <Typography type="sub-title-5">Oops! Something did not work</Typography>
                    </div>
                    <div>
                        <Button type="primary-btn" onClick={() => handleRedirect(routes.homepage.path)}>Back to Homepage</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className={classes.imgBlock}>
                    <Image
                        src={discImage}
                        alt="disc image"
                    />
                </div>

            </Grid>
        </Grid>
    );
};

export default ErrorPage;
