import { makeStyles } from '@mui/styles';
import assets from 'assets';
import { bool, string } from 'prop-types';
import { useState } from 'react';
import styles from './layout/VideoPlayer.styles.default';

const useStyles = makeStyles(styles);

const VideoPlayer = ({
    videoUrl,
    asBackground,
    autoPlay,
    muted,
    thumbnail,
}) => {
    const classes = useStyles();
    const { icons: { Play } } = assets;

    const [ isPlaying, setIsPlaying ] = useState(false);

    const onPlay = () => {
        const videoDiv = document.getElementById('video');
        videoDiv.play();
    };

    return (
        <div className={`${ classes.root } ${ asBackground && 'background' }`}>
            <video
                controls={!asBackground}
                controlsList="nodownload"
                loop={asBackground}
                autoPlay={autoPlay}
                muted={muted}
                id="video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className={asBackground ? classes.bgVideoPlayer : classes.videoPlayer}
                poster={thumbnail}
            >
                <source
                    type="video/mp4"
                    src={videoUrl}
                />
                <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
            </video>

            {!asBackground && (
                <div className={classes.playIcon}>
                    {!isPlaying && <Play onClick={onPlay} />}
                </div>
            )}
        </div>
    );
};

VideoPlayer.propTypes = {
    videoUrl: string,
    asBackground: bool,
    autoPlay: bool,
    muted: bool,
};

VideoPlayer.defaultProps = {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    asBackground: false,
    autoPlay: false,
    muted: false,
};

export default VideoPlayer;
