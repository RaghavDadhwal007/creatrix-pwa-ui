import { makeStyles } from '@mui/styles';
import React from 'react';
import assets from 'assets';
import Typography from '@components/Typography/Typography';
import Image from '@components/Image/Image';
import Link from '@components/Link/Link';
import styles from './layout/AuthHeader.styles.default';

const useStyles = makeStyles(styles);

const AuthHeader = () => {
    const classes = useStyles();
    const { images: { creatigoLogo } } = assets;

    return (
        <div className={classes.flexWrapper}>
            <Link key={creatigoLogo} href="/">
                <div className={classes.imageWrapper}>
                    <Image
                        src={creatigoLogo}
                        alt="Creatigo Logo"
                    />
                </div>
            </Link>
            <div className={classes.linkWrapper}>
                <Typography type="link">Footage</Typography>
                <Typography type="link">Music</Typography>
            </div>
        </div>
    );
};

export default AuthHeader;
