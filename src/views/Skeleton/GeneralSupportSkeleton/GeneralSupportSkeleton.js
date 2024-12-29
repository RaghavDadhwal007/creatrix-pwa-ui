import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const GeneralSupportSkeleton = ({ length, cellCount, lg }) => (
    <Grid container>
        <Grid item xs={12} marginBottom={3}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="35px"
                width="30%"
            />
        </Grid>
        <Grid item xs={12} marginBottom={5}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="100%"
            />
        </Grid>
        <Grid item xs={12} marginBottom={3}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="35px"
                width="40%"
            />
        </Grid>
        <Grid item xs={12} marginBottom={5}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="25%"
            />
        </Grid>
        <Grid container>
            {Array(length).fill({}).map((key) => (
                <Grid item lg={lg || 12} xs={12} key={key}>
                    {Array(cellCount).fill({}).map((index) => (
                        <React.Fragment key={index}>
                            <Grid item marginY={1}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={50}
                                    width="100%"
                                />
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            ))}
        </Grid>
    </Grid>
);

export default GeneralSupportSkeleton;
