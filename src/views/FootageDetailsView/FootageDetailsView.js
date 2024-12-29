import Button from '@components/Button/Button';
import ImagesSlider, { SliderItem } from '@components/ImagesSlider/ImagesSlider';
import Typography from '@components/Typography/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    Grid,
} from '@mui/material';
import useMusicDetails from '@views/MusicDetailsView/functionality/MusicDetailsView.func';
import assets from 'assets';
import AddToProjects from 'src/layouts/AddToProject/AddToProject';
import DownloadDropdown from 'src/layouts/DownloadDropdown/DownloadDropdown';
import { makeStyles } from '@mui/styles';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import VideoHoverCard from '@components/Cards/VideoHoverCard/VideoHoverCard';
import helperFunctions from 'helperFunctions';
import useFootageDetails from './functionality/FootageDetailsView.func';
import FootageDetailsSkeleton from './skeleton/FootagePageSkeleton';
import styles from './layout/FootageDetailsView.styles.default';

const CloudinaryVideoPlayer = dynamic(
    () => import('@components/CloudinaryVideoPlayer/CloudinaryVideoPlayer'),
    {
        ssr: false,
        loading: () => (
            <div>Loadng...</div>
        ),
    },
);

const useStyles = makeStyles(styles);

const FootageDetailsView = ({
    path,
}) => {
    const classes = useStyles();
    const { images: { musicDetailsPageArr, footageDetailsArr }, icons: { Inbox, ArrowDownCircle, Heart } } = assets;
    const {
        loading, videoData = {},
    } = useFootageDetails({
        videoUrl: path,
    });
    const { isImage } = helperFunctions;

    const {
        handleClick,
        projectMenuAnchor,
        isProjectMenuOpen,
        handleOpenProjectMenu,
        hanldeCloseProjectMenu,
        myProjectList,
        handleAddProjectDialogOpen,
        myProjectListLoading,
        downloadMenuAnchor,
        isDownloadDropdownOpen,
        handleOpenDownloadMenu,
        handleCloseDownloadMenu,
    } = useMusicDetails();

    return (
        <div className={classes.root}>

            {loading ? (
                <FootageDetailsSkeleton />
            ) : (
                <>
                    <Grid container columnSpacing={6} rowSpacing={2}>
                        <Grid item xs={12} sm={6} className={classes.videoPlayer}>
                            <Suspense>
                                <CloudinaryVideoPlayer publicId={videoData?.public_id} />
                            </Suspense>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container justifyContent="space-between" columnSpacing={2}>
                                <Grid item xs={6}>
                                    <Typography className={classes.titleTxt} type="heading-2">{videoData?.public_id}</Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.techBtn}>
                                    <Button endIcon={<ArrowDropDownIcon />} type="icon-btn">Technical Details</Button>
                                </Grid>
                            </Grid>
                            <Typography type="body2" className={classes.descTxt}>
                                An attractive couple in their 30s walks on the beach in Goa at sunset
                            </Typography>
                            <Grid className={classes.btnsWrapper} container columnSpacing={5} rowSpacing={3}>
                                <Grid item>
                                    <Button type="border-btn" startIcon={<ArrowDownCircle />} onClick={handleOpenDownloadMenu}>Download</Button>
                                </Grid>
                                <Grid item>
                                    <Button type="border-btn" startIcon={<Inbox />} onClick={handleOpenProjectMenu}>Add to projects</Button>
                                </Grid>
                                <Grid item>
                                    <Button type="border-btn" startIcon={<Heart />} onClick={() => handleClick('add_to_favourites')}>Add to favouries</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.viewportLineWrapper}>
                        <div className={classes.redLine} />
                        <Typography>viewport line</Typography>
                        <div className={classes.redLine} />
                    </div>
                    <div className={classes.recomendationWrapper}>
                        <Typography type="heading-2">More from this shoot</Typography>
                        <ImagesSlider noOfImages={footageDetailsArr.length}>
                            <Grid container flexWrap="nowrap">
                                {footageDetailsArr.map((item) => (
                                    <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                        <SliderItem>
                                            <VideoHoverCard
                                                imageUri={item}
                                                duration={
                                                    Number.parseFloat(item?.duration || '00.0').toFixed(2)
                                                }
                                                isVideoHoverPlay={!isImage(item?.thumbnail_section?.cloudinary_thumbnail)}
                                            />
                                        </SliderItem>
                                    </Grid>
                                ))}
                            </Grid>
                        </ImagesSlider>
                    </div>
                    <div className={classes.relatedFootageWrapper}>
                        <Typography type="heading-2">Related footage</Typography>
                        <ImagesSlider noOfImages={musicDetailsPageArr.length}>
                            <Grid container flexWrap="nowrap">
                                {musicDetailsPageArr.map((item) => (
                                    <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                        <SliderItem>
                                            <VideoHoverCard
                                                imageUri={item}
                                                duration={
                                                    Number.parseFloat(item?.duration || '00.0').toFixed(2)
                                                }
                                                isVideoHoverPlay={!isImage(item?.thumbnail_section?.cloudinary_thumbnail)}
                                            />
                                        </SliderItem>
                                    </Grid>
                                ))}
                            </Grid>
                        </ImagesSlider>
                    </div>
                    <AddToProjects
                        videoData={videoData}
                        projectMenuAnchor={projectMenuAnchor}
                        isProjectMenuOpen={isProjectMenuOpen}
                        hanldeCloseProjectMenu={hanldeCloseProjectMenu}
                        myProjectList={myProjectList}
                        handleAddProjectDialogOpen={handleAddProjectDialogOpen}
                        myProjectListLoading={myProjectListLoading}
                    />
                    <DownloadDropdown
                        downloadMenuAnchor={downloadMenuAnchor}
                        isDownloadDropdownOpen={isDownloadDropdownOpen}
                        handleDownloadDropdownClose={handleCloseDownloadMenu}
                    />
                </>
            )}
        </div>
    );
};

export default FootageDetailsView;
