const styles = ((theme) => ({
    root: {
        cursor: 'pointer',
        position: 'relative',
        '&.background': {
            position: 'absolute',
            top: '0px',
            height: '100%',
            width: '100%',
        },
    },
    playIcon: {
        position: 'absolute',
        top: '40%',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        [ theme.breakpoints.down('tablet') ]: {
            top: '26%',
        },
    },
    videoPlayer: {
        borderRadius: '12px',
        objectFit: 'cover',
        width: '100%',
        minHeight: '700px', // for the thumbnail
        [ theme.breakpoints.down('tablet') ]: {
            minHeight: 300,
        },
    },
    bgVideoPlayer: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
}));

export default styles;
