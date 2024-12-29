import { useRef, useState } from 'react';

const useMusicSubCollection = () => {
    const [ isIndex, setisIndex ] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const audioRef = useRef([]);

    // When you click on audio
    const handleExpand = (index) => {
        setisIndex(index);
        if (audioRef.current[ index ].paused) {
        // Play the audio
            setIsPlaying(true);
            audioRef.current[ index ]?.play();
        } else {
        // Pause the audio
            setIsPlaying(false);
            audioRef?.current?.[ index ]?.pause();
        }

        // previous audio pause when click on next audio.
        if (document && typeof document !== 'undefined') {
            document.addEventListener('play', (e) =>  {
                const audios = document.getElementsByTagName('audio');
                for (let i = 0, len = audios.length; i < len; i += 1) {
                    if (audios?.[ i ] !== e.target) {
                        audios?.[ i ]?.pause();
                    }
                }
            }, true);
        }
    };

    return {
        handleExpand,
        isIndex,
        isPlaying,
        audioRef,
    };
};

export default useMusicSubCollection;
