import Button from '@components/Button/Button';
import ImagesSlider, { SliderItem } from '@components/ImagesSlider/ImagesSlider';
import Typography from '@components/Typography/Typography';
import {
    Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import Skeleton from 'react-loading-skeleton';
import { themeColor } from 'styles/theme/theme';
import styles from '../layout/FootageDetailsView.styles.default';

const useStyles = makeStyles(styles);

const FootageDetailsSkeleton = () => {
    const classes = useStyles();
    const { images: { musicDetailsPageArr, footageDetailsArr }, icons: { Inbox, ArrowDownCircle, Heart } } = assets;

    return (
        <div className={classes.rootSkelton}>

            <div className={classes.videoPlayer}>
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="450px"
                />

            </div>

            <Grid className={classes.headingWrapper} container justifyContent="space-between">
                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="30px"
                    width="400px"
                />

                <Skeleton
                    baseColor={themeColor.skeletonColors.baseColor}
                    highlightColor={themeColor.skeletonColors.highlightColor}
                    height="30px"
                    width="80px"
                />
            </Grid>
            <Skeleton
                baseColor={themeColor.skeletonColors.baseColor}
                highlightColor={themeColor.skeletonColors.highlightColor}
                height="20px"
                width="500px"
            />
            <Grid className={classes.tagsWrapper} spacing={2} container>
                {[ 1, 2, 3, 4, 5, 6, 6, 7 ].map((tag) => (
                    <Grid item key={tag}>
                        <Skeleton
                            baseColor={themeColor.skeletonColors.baseColor}
                            highlightColor={themeColor.skeletonColors.highlightColor}
                            height="30px"
                            width="80px"
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid className={classes.btnsWrapper} container>
                <Button disabled type="border-btn" startIcon={<ArrowDownCircle />}>Download</Button>
                <Button disabled type="border-btn" startIcon={<Inbox />}>Add to projects</Button>
                <Button disabled type="border-btn" startIcon={<Heart />}>Add to favouries</Button>
            </Grid>
            <div className={classes.recomendationWrapper}>
                <Typography type="heading-2">More from this shoot</Typography>
                <ImagesSlider noOfImages={footageDetailsArr.length}>
                    <Grid container flexWrap="nowrap">
                        {footageDetailsArr.map((item) => (
                            <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                <SliderItem>
                                    <Skeleton
                                        baseColor={themeColor.skeletonColors.baseColor}
                                        highlightColor={themeColor.skeletonColors.highlightColor}
                                        height="250px"
                                        width="250px"
                                    />
                                </SliderItem>
                            </Grid>
                        ))}
                    </Grid>
                </ImagesSlider>
            </div>
            <div className={classes.recomendationWrapper}>
                <Typography type="heading-2">Related footage</Typography>
                <ImagesSlider noOfImages={musicDetailsPageArr.length}>
                    <Grid container flexWrap="nowrap">
                        {musicDetailsPageArr.map((item) => (
                            <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                <SliderItem>
                                    <Skeleton
                                        baseColor={themeColor.skeletonColors.baseColor}
                                        highlightColor={themeColor.skeletonColors.highlightColor}
                                        height="250px"
                                        width="250px"
                                    />
                                </SliderItem>
                            </Grid>
                        ))}
                    </Grid>
                </ImagesSlider>
            </div>
        </div>
    );
};

export default FootageDetailsSkeleton;
