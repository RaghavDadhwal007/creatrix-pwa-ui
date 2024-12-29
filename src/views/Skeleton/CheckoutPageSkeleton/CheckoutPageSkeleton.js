import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const CheckoutPageSkeleton = ({ length, cellCount, lg }) => (
    <Grid container padding={5}>
        <Grid container marginBottom={5} spacing={6}>
            <Grid item lg={4} xs={4} marginTop={10}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="550px"
                    width="100%"
                />
            </Grid>
            <Grid item lg={4} xs={4}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="550px"
                    width="100%"
                />
            </Grid>
            <Grid item lg={4} xs={4} marginTop={10}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="550px"
                    width="100%"
                />
            </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={4}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="40px"
                width="20%"
            />
        </Grid>
        <Grid container marginBottom={5} spacing={3}>
            <Grid item lg={3} xs={3}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="300px"
                    width="100%"
                />
            </Grid>
            <Grid item lg={3} xs={3}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="300px"
                    width="100%"
                />
            </Grid>
            <Grid item lg={6} xs={6}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="300px"
                    width="100%"
                />
            </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={4}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="40px"
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
                                    height={80}
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

export default CheckoutPageSkeleton;
