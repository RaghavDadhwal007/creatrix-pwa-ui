import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Image from '@components/Image/Image';
import Typography from '@components/Typography/Typography';
import Link from '@components/Link/Link';
import styles from './layout/MobileViewLogoBlock.styles.default';

const useStyles = makeStyles(styles);

const MobileViewFooterLogoBlock = ({ data }) => {
    const classes = useStyles();
    const logoUrl = data?.logo_block?.logo;
    const logoText = data?.logo_block?.markdown.children?.[ 0 ]?.children?.[ 0 ];

    return (
        <>
            <Grid key={JSON.stringify(data)} item xs={12} className={classes.logoBlock}>
                <Link href="/" as="/">
                    <div className={classes.footerLogoContainer}>
                        <Image
                            src={logoUrl.url}
                            alt={logoUrl?.title}
                        />
                    </div>
                </Link>
                <div className={classes.footerLogoBlockText}>
                    <Typography type="caption4">{logoText?.text}</Typography>
                </div>
            </Grid>
        </>
    );
};

export default MobileViewFooterLogoBlock;
