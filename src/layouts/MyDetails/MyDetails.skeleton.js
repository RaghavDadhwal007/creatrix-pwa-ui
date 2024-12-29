import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const ImageSkeleton = () => (
    <Skeleton
        baseColor={themeColor.skeletonColors.baseColor}
        highlightColor={themeColor.skeletonColors.highlightColor}
        circle
        height={150}
        width={150}
    />
);

const FormSkeleton = () => (
    <Grid container spacing={2}>
        <Grid item md={6}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height={50}
            />
        </Grid>
        <Grid item md={6}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height={50}
            />
        </Grid>
        <Grid item md={12} sm={12}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height={50}
            />
        </Grid>
    </Grid>
);

const PhoneSkeleton = () => (
    <Grid container spacing={2}>
        <Grid item md={12} sm={12}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height={50}
            />
        </Grid>
    </Grid>
);

export  {
    ImageSkeleton,
    FormSkeleton,
    PhoneSkeleton,
};
