import Grid  from '@mui/material/Grid';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const HeaderSkeletonDesktop = () => (
    <Grid container height="70px" marginBottom={2} alignItems="center">
        <Grid item xs={2} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
        <Grid item xs={1} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
        <Grid item xs={1} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
        <Grid item xs={3} paddingX={1} />
        <Grid item xs={2} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
        <Grid item xs={1} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
        <Grid item xs={2} paddingX={1}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="25px"
            />
        </Grid>
    </Grid>

);

const HeaderSkeleton = HeaderSkeletonDesktop;

export default HeaderSkeleton;
