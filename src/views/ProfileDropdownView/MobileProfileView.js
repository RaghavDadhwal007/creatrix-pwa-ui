import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useCookies } from 'react-cookie';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import { useSelector } from 'react-redux';
import UserSelector from 'redux/selectors/user.selector';
import Link from '@components/Link/Link';
import styles from './layout/ProfileDropdownView.styles.default';

const useStyles = makeStyles(styles);

const MobileProfileView = () => {
    const classes = useStyles();
    const { images: { userAvatar } } = assets;
    const [ cookies ] = useCookies([ 'user' ]);
    const accessToken = cookies?.user?.accessToken;
    const userData = { accessToken };
    const user = useSelector(UserSelector?.getUser);

    return (
        <Link href="/settings/my-details">
            <div>
                {userData?.accessToken && (
                    <Grid container className={classes.profileWrapper}>
                        <Grid className={classes.mobileImageWrapper}>
                            <Image alt="profile" src={userAvatar} layout="fill" />
                        </Grid>
                        <Grid item alignItems="center">
                            <Typography className={classes.profileName}>{user?.firstName}</Typography>
                            <Typography className={classes.email}>{user?.email}</Typography>
                        </Grid>
                    </Grid>
                )}
            </div>
        </Link>
    );
};

export default MobileProfileView;
