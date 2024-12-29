import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const BillingDetailSkelton = () => (
    <>
        <Grid item xs={6} marginBottom={2}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="50px"
            />
        </Grid>
        <Grid
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            container
        >
            {Array(5).fill({}).map((item) => (
                <>
                    <Grid item xs={5} key={item} marginBottom={1.5}>
                        <Skeleton
                            baseColor={themeColor.skeletonColors.baseColor}
                            highlightColor={themeColor.skeletonColors.highlightColor}
                            height="25px"
                        />
                    </Grid>
                </>
            ))}
        </Grid>
        <Grid item xs={10} marginBottom={2} marginTop={6}>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="50px"
            />
        </Grid>
        <Grid
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            container
        >
            {Array(5).fill({}).map((item) => (
                <>
                    <Grid item xs={10} key={item} marginBottom={1.5}>
                        <Skeleton
                            baseColor={themeColor.skeletonColors.baseColor}
                            highlightColor={themeColor.skeletonColors.highlightColor}
                            height="25px"
                        />
                    </Grid>
                </>
            ))}
        </Grid>
    </>
);
export default BillingDetailSkelton;
