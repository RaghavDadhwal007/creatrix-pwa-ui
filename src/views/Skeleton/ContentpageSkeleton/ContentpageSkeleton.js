import Grid from '@mui/material/Grid';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';

const ContentPageSkeleton = () => (
    <Grid container>
        <Grid
            item
            xs={12}
            marginBottom={4}
        >
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="200px"
            />
        </Grid>
        <Grid
            item
            xs={12}
            marginBottom={6}
        >
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="500px"
            />
        </Grid>
        <Grid
            item
            xs={12}
            marginBottom={6}
        >
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="150px"
            />
        </Grid>
        <Grid
            item
            xs={12}
            marginBottom={4}
        >
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="250px"
            />
        </Grid>
        <Grid
            item
            xs={12}
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
            </Grid>
        </Grid>
    </Grid>
);

export default ContentPageSkeleton;
