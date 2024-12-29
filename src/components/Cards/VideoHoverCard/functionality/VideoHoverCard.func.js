import { useState } from 'react';

const useVideoHoverCard = () => {
    const [ hoverImage, setHoverImage ] = useState(false);

    const handleHoverType = (e) => {
        setHoverImage(Boolean(e.type === 'mouseenter'));
    };

    return {
        hoverImage,
        handleHoverType,
    };
};

const VideoHoverCardFunc = { useVideoHoverCard };

export default VideoHoverCardFunc;
