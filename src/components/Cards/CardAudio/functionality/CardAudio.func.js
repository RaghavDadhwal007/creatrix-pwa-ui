import CustomNavigationHook from 'hooks/customNavigationHook';

const { useRef, useState } = require('react');

const useCardAudio = () => {
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ playing, setPlaying ] = useState(false);

    const [ open, setOpen ] = useState(false);

    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    const audioRef = useRef(null);
    const togglePlaying = (e) => {
        e.stopPropagation();
        setPlaying(!playing);
    };

    const toggleOpen = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };

    const handleAction = (e) => {
        e.stopPropagation();
    };

    return {
        togglePlaying,
        playing,
        duration,
        currentTime,
        audioRef,
        setCurrentTime,
        setDuration,
        handleRedirect,
        toggleOpen,
        open,
        handleAction,
    };
};
export default useCardAudio;
