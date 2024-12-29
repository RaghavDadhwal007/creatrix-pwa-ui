import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import styles from './layout/MobileViewSocialIcons.styles.default';
import SocialIconimages from './SocialIconImages';

const useStyles = makeStyles(styles);

const MobileViewSocialIcons = ({ data }) => {
    const classes = useStyles();
    const socialIcons = data?.social_icon?.social_blocks;
    const SocialTitle = data?.social_icon;

    return (
        <Grid item xs={12} className={classes.footerSocialMediaBlock}>
            <Typography type="sub-title4">{SocialTitle?.title}</Typography>
            <div className={classes.socialBlock}>
                {socialIcons?.map((item) => (
                    <div key={item?.social_icon?.uid} className={classes.socialMediaIcons}>
                        <SocialIconimages items={item} />
                    </div>
                ))}
            </div>
        </Grid>
    );
};

export default MobileViewSocialIcons;
