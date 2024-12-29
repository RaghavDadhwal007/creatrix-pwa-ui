import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';
import styles from './layout/MyFavouriteSkeleton.styles';

const useStyles = makeStyles(styles);
const MyFavouritesSkeleton = ({ length, cellCount, lg }) => {
    const classes = useStyles();
    return (
        <>
            <div className={`${ classes.headingWrapper } firstChild`}>
                <Typography className={classes.heading}>Footage</Typography>
            </div>
            {/* due to padding of elements, marginLeft is in negative value */}
            <Grid container marginLeft={-2}>
                {Array(length).fill({}).map((key) => (
                    <Grid padding={2} item lg={lg || 4} xs={6} key={key}>
                        {Array(cellCount).fill({}).map((index) => (
                            <React.Fragment key={index}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={150}
                                    width="100%"
                                />
                            </React.Fragment>
                        ))}
                    </Grid>
                ))}
            </Grid>
            <div className={classes.headingWrapper}>
                <Typography className={classes.heading}>Music</Typography>
            </div>
            <div>
                {Array(length).fill({}).map((key) => (
                    <div key={key} style={{ marginTop: '20px' }}>
                        {Array(cellCount).fill({}).map((index) => (
                            <React.Fragment key={index}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={100}
                                    width="100%"
                                />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
export default MyFavouritesSkeleton;
