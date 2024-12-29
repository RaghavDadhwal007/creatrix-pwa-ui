const styles = ((theme) => ({
    leftIcon: {
        position: 'absolute',
        cursor: 'pointer',
        backgroundColor: theme.palette.buttonColors.darkColor,
        top: '50%',
        borderRadius: '50%',
        left: '-1px',
    },
    rightIcon: {
        position: 'absolute',
        right: '9px',
        cursor: 'pointer',
        backgroundColor: theme.palette.buttonColors.darkColor,
        top: '50%',
        borderRadius: '50%',
    },
    carousel: {
        overflow: 'hidden',
        position: 'relative',
    },
    inner: {
        whiteSpace: 'nowrap',
        transition: 'transorm 0.3s',
    },
    carouselItem: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'white',
    },
    sliderRoot: {
        position: 'relative',
        width: '100%',
        margin: '2rem 0',
    },
    sliderBg: {
        backgroundColor: theme.palette.white,
        width: '100%',
        height: '5px',
        borderRadius: '12px',
    },
    slider: {
        backgroundColor: theme.palette.pink,
        height: '10px',
        borderRadius: '12px',
        position: 'absolute',
        top: '-3px',
        cursor: 'pointer',
    },
}));

export default styles;
