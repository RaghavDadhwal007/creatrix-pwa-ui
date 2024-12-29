/* eslint-disable @next/next/no-img-element */
import Typography from '@components/Typography/Typography';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import VideoHoverCardFunc from './functionality/VideoHoverCard.func';
import styles from './layout/VideoHoverCard.styles.default';

const useStyles = makeStyles(styles);

const VideoHoverCard = ({
    imageUri,
    duration,
    height,
    width,
    isVideoHoverPlay,
}) => {
    const classes = useStyles();
    const { useVideoHoverCard } = VideoHoverCardFunc;
    const { images: { videoDefaultThumbnail } } = assets;

    const {
        hoverImage, handleHoverType,
    } = useVideoHoverCard();

    return (
        <Grid item xs={12}>
            <div className={classes.root} onMouseEnter={handleHoverType} onMouseLeave={handleHoverType}>
                <div className={classes.images}>
                    {(hoverImage && isVideoHoverPlay) ?  (
                        <img
                            src={imageUri || videoDefaultThumbnail}
                            width={width}
                            height={height}
                            alt="gallery"
                        />
                    ) :  (
                        <img
                            src={videoDefaultThumbnail}
                            width={width}
                            height={height}
                            alt="gallery"
                        />
                    )}
                </div>
                {hoverImage
                && (
                    <div>
                        <div className={classes.iconLeft}>
                            <Typography>4K/HD</Typography>
                        </div>
                        <div className={classes.iconRight}>
                            <div className={classes.icons}>
                                <DownloadForOfflineOutlinedIcon fontSize="small" />
                            </div>
                            <div className={classes.icons}>
                                <SourceOutlinedIcon fontSize="small" />
                            </div>
                            <div className={classes.icons}>
                                <FavoriteBorderOutlinedIcon fontSize="small" />
                            </div>
                        </div>
                        <div className={classes.iconBottom}>
                            <Typography>{duration || '02:00'}</Typography>
                        </div>
                    </div>
                )}
            </div>
        </Grid>
    );
};

export default VideoHoverCard;
