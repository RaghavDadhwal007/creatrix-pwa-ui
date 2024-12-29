import { makeStyles } from '@mui/styles';
import React from 'react';
import { Close } from '@mui/icons-material';
import assets from 'assets';
import Image from 'next/image';
import styles from './layout/MobileHeaderViewSideDrawerBeforeLogin.styles.default';

const useStyles = makeStyles(styles);

const MobileHeaderViewSideDrawerBeforeLogin = ({
    onClose,
}) => {
    const classes = useStyles();
    const { images: { creatigoLogo } } = assets;
    return (
        <div className={classes.slideHeader}>
            <div className={classes.imageWrapper}>
                <Image
                    src={creatigoLogo || ''}
                    alt="Creatigo Logo"
                    height={50}
                    width={100}
                />

            </div>
            <div className={classes.slideRightHeader}>
                <div
                    onClick={onClose}
                    aria-hidden="true"
                    className={classes.close_btn}
                ><Close  />
                </div>
            </div>
        </div>
    );
};

export default MobileHeaderViewSideDrawerBeforeLogin;
