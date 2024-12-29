import { Grid } from '@mui/material';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const MyProjectSkeleton = ({ length, cellCount, lg }) => (
    <Grid container marginTop={2}>
        {Array(length).fill({}).map((key) => (
            <Grid padding={2} item lg={lg || 4} xs={6} key={key}>
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
);
export default MyProjectSkeleton;
