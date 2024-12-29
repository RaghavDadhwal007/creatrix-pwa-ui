import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import styles from './layout/FooterSocialIcons.styles.default';
import SocialIconimages from './SocialIconImages';

const useStyles = makeStyles(styles);

const FooterSocialIcons = ({ data }) => {
    const classes = useStyles();
    const socialIcons = data?.[ 0 ]?.social_icon.social_blocks;
    const SocialTitle = data?.[ 0 ]?.social_icon;

    return (
        <div className={classes.footerSocialMediaBlock}>
            <Typography type="sub-title4">{SocialTitle?.title}</Typography>
            <div className={classes.socialBlock}>
                {socialIcons?.map((item) => (
                    <div key={item?.social_icon?.uid} className={classes.socialMediaIcons}>
                        <SocialIconimages items={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterSocialIcons;
