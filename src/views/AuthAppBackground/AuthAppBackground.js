import CardTypeII from '@components/Cards/CardTypeII/CardTypeII';
import Image from '@components/Image/Image';
import Typography from '@components/Typography/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import { string } from 'prop-types';
import AuthHeader from 'src/layouts/AuthHeader/AuthHeader';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import styles from './layout/AuthAppBackground.styles.default';

const useStyles = makeStyles(styles);

const AuthAppBackground = ({ children, heading = '', isCard = true }) => {
    const classes = useStyles();
    const { images: { authPageWomenBg, authPageWomenBgTablet } } = assets;
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));

    return (
        <div className={classes.authBackgroundWrapper}>
            <AuthHeader />
            <div className={classes.formWrapper}>
                {isCard ? (
                    <CardTypeII className={classes.cardWrapper}>
                        <Grid container className={classes.cardContainer}>
                            <Grid item md={5} sm={5} xs={0} className={classes.imageContainer}>
                                <div className={classes.auth_image_wrapper}>
                                    <Image
                                        src={isTablet ? authPageWomenBgTablet : authPageWomenBg}
                                        alt="AuthPage image "
                                    />
                                </div>
                            </Grid>
                            <Grid item md={7} sm={7} xs={12}>
                                <div className={classes.cardview_container}>
                                    <div className={classes.cardview_topheader}>
                                        <Typography type="heading-1">{heading}</Typography>
                                    </div>
                                    {children}
                                </div>
                            </Grid>
                        </Grid>
                    </CardTypeII>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </div>
        </div>
    );
};

AuthAppBackground.propTypes = {
    heading: string,
};

AuthAppBackground.defaultProps = {
    heading: '',
};

export default AuthAppBackground;
