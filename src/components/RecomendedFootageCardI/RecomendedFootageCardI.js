import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Typography from '@components/Typography/Typography';
import styles from './layout/RecomendedFootageCardI.styles.default';

const useStyles = makeStyles(styles);

const RecomendedFootageCardI = ({ imageUri }) => {
    const classes = useStyles();
    const {
        icons: {
            SearchWhite, ArrowDownCircleWhite, InboxWhite, HeartWhite,
        },
    } = assets;
    const [ isHover, setIsHover ] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={classes.cardWrapper}
        >
            <div className={classes.coverImage}>
                <Image
                    src={imageUri}
                    alt="card image"
                    layout="fill"
                />
            </div>
            {isHover && (
                <>
                    <div className={classes.hoverIconsWrapper}>
                        <Grid container justifyContent="space-between">
                            <Grid item className={classes.icon}>
                                <SearchWhite />
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <div className={classes.icon}>
                                        <ArrowDownCircleWhite />
                                    </div>
                                    <div className={classes.icon}>
                                        <InboxWhite />
                                    </div>
                                    <div className={classes.icon}>
                                        <HeartWhite />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Typography className={classes.timeHoverIcon}>02:00</Typography>
                </>
            )}
        </div>
    );
};

export default RecomendedFootageCardI;
