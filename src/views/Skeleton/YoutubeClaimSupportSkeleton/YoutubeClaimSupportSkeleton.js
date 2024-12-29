import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const YoutubeClaimSupportSkeleton = ({ length, cellCount, lg }) => (
    <Grid container>
        <Grid item xs={12} paddingX={2} marginBottom={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="30px"
                width="150px"
            />
        </Grid>
        <Grid item xs={12} paddingX={2} marginBottom={3}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="35px"
                width="250px"
            />
        </Grid>
        <Grid item xs={12} marginBottom={2} paddingX={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="40%"
            />
        </Grid>
        <Grid item xs={12} paddingX={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="100%"
            />
        </Grid>
        <Grid container>
            {Array(length).fill({}).map((key) => (
                <Grid marginTop={3} padding={2} item lg={lg || 6} xs={6} key={key}>
                    {Array(cellCount).fill({}).map((index) => (
                        <React.Fragment key={index}>
                            <Grid item marginBottom={3}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={20}
                                    width="44%"
                                />
                            </Grid>
                            <Skeleton
                                baseColor={themeColor.skeletonColors.baseColor}
                                highlightColor={themeColor.skeletonColors.highlightColor}
                                height={400}
                                width="100%"
                            />
                            <Grid item marginTop={3}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={20}
                                    width="100%"
                                />
                            </Grid>
                            <Grid item marginY={1}>
                                <Skeleton
                                    baseColor={themeColor.skeletonColors.baseColor}
                                    highlightColor={themeColor.skeletonColors.highlightColor}
                                    height={20}
                                    width="100%"
                                />
                            </Grid>
                            <Skeleton
                                baseColor={themeColor.skeletonColors.baseColor}
                                highlightColor={themeColor.skeletonColors.highlightColor}
                                height={20}
                                width="100%"
                            />

                        </React.Fragment>
                    ))}
                </Grid>
            ))}
        </Grid>
        <Grid item xs={12} paddingX={2} marginY={3}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="60%"
            />
        </Grid>
        <Grid container>
            {Array(2).fill({}).map((key) => (
                <Grid padding={2} item lg={lg || 4} xs={4} key={key}>
                    {Array(cellCount).fill({}).map((index) => (
                        <React.Fragment key={index}>
                            <Skeleton
                                baseColor={themeColor.skeletonColors.baseColor}
                                highlightColor={themeColor.skeletonColors.highlightColor}
                                height={40}
                                width="100%"
                            />
                        </React.Fragment>
                    ))}
                </Grid>
            ))}
        </Grid>
        <Grid item xs={12} paddingX={2} marginBottom={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="40px"
                width="100%"
            />
        </Grid>
        <Grid item margin="0 auto" xs={3} paddingX={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="40px"
                width="200"
            />
        </Grid>
    </Grid>
);

export default YoutubeClaimSupportSkeleton;
