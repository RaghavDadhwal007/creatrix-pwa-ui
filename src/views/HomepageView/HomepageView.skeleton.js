import Grid from '@mui/material/Grid';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const HomepageViewSkeleton = () => (
    <Grid container>
        <Grid
            item
            xs={12}
            height="600px"
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{
                background: '#ffffff20',
            }}
        >
            <Grid container>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="20px"
                    />
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Grid container marginY={1}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="40px"
                    />
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Grid container marginY={2}>
                <Grid item xs={5} />
                <Grid item xs={1} paddingX={2}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="25px"
                    />
                </Grid>
                <Grid item xs={1} paddingX={2}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="25px"
                    />
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </Grid>
        <Grid
            item
            xs={12}
            height="200px"
            marginBottom={4}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
        >
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="50px"
                    />
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Grid>
        <Grid
            item
            xs={12}
            height="500px"
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
        >
            <Grid container>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
                <Grid item padding={2} xs={3}>
                    <Skeleton
                        baseColor={themeColor.skeletonColors.baseColor}
                        highlightColor={themeColor.skeletonColors.highlightColor}
                        height="200px"
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default HomepageViewSkeleton;
