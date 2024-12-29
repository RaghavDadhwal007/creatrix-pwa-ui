import {  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/BannerHero.styles.default';

const useStyles = makeStyles(styles);

const BannerHero = ({
    data,
}) => {
    const classes = useStyles();

    if (Object.entries(data).length <= 0) {
        return null;
    }

    const backGroundBanner = {
        backgroundImage: `url(${ data?.banner_group?.image?.url })`,
    };

    return (
        <div className={classes.contactUsWrapper} style={backGroundBanner}>
            <div className={classes.contactInnerUsWrapper}>
                <Typography type="heading-2" className={classes.contactHeading}>
                    {ReactHTMLParser(data?.banner_group?.copy)}
                </Typography>
                <div className={classes.btnBlockWrapper}>
                    {data?.banner_group?.link_list?.map((item) => {
                        const btnStyle = {
                            backgroundColor: item?.background_color,
                            borderColor: item?.background_color,
                            color: item?.color,
                        };
                        return (
                            <a key="1" href={item?.link?.href} className={classes.btnWrapper} style={btnStyle}>
                                {item?.link?.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default BannerHero;
