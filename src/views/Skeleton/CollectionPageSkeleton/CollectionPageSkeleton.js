import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';
import styles from './layout/CollectionPageSkeleton.styles.default';

const useStyles = makeStyles(styles);

const CollectionPageSkeleton = ({ length, cellCount, lg }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} paddingX={2}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="40px"
                    width="200px"
                    className={classes.title}
                />
            </Grid>
            <Grid item xs={12} marginBottom={2} paddingX={2}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="20px"
                    width="100%"
                    className={classes.desc}
                />
            </Grid>
            <Grid item xs={12} paddingX={2}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="20px"
                    width="300px"
                />
            </Grid>
            <Grid container className={classes.imagesWrapper}>
                {Array(length).fill({}).map((key) => (
                    <Grid padding={2} item lg={lg || 4} xs={4} key={key}>
                        {Array(cellCount).fill({}).map((index) => (
                            <React.Fragment key={index}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={200}
                                    width="100%"
                                />
                            </React.Fragment>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default CollectionPageSkeleton;
