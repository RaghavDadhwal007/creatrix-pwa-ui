// cloudinary-video-player is being used because cloudinary-react module doesn't have all functionalities by default
import 'cloudinary-video-player/dist/cld-video-player.min';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import helperFunctions from 'helperFunctions';
import { useEffect, useRef } from 'react';
import { Cloudinary } from 'cloudinary-core';

const CloudinaryVideoPlayer = ({
    cloudName = 'destm-technologies', publicId = '', controls = true, seekThumbnails = true,
    showJumpControls = true, muted = false, autoplay = false,
}) => {
    const cld = new Cloudinary({ cloud_name: cloudName });
    const videoRef = useRef(null);
    const { setAttributes } = helperFunctions;
    let videoPlayer;
    // pass the attributes here which will be used in video player tag
    const attributes = {
        id: 'cloudinary-video-player-tag',
    };
    const initializeCloudinaryVideoPlayer = (cloudinaryVideoPlayerRef) => {
        if (cloudinaryVideoPlayerRef && typeof document !== 'undefined') {
            // injecting video element in dom
            const videoElement = document.createElement('video');

            setAttributes(videoElement, attributes);
            cloudinaryVideoPlayerRef?.current?.appendChild(videoElement);

            // initializing cloudinary video player instance
            videoPlayer = cld.videoPlayer('cloudinary-video-player-tag', {
                fluid: true,
                controls,
                seekThumbnails,
                showJumpControls,
                muted,
                autoplay,
            });

            videoPlayer.source(publicId);
        }
    };
    useEffect(() => {
        initializeCloudinaryVideoPlayer(videoRef, videoPlayer);

        return () => {
            // cleanup for cloudinary video player when component unmount
            videoPlayer?.dispose();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [  ]);

    return (
        <div ref={videoRef} />

    );
};
export default CloudinaryVideoPlayer;
