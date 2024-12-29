const styles = ((theme) => ({
    root: {
        position: 'relative',
        marginBottom: '10px',
    },
    iconLeft: {
        position: 'absolute',
        top: 15,
        left: 15,
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: '0 8px',
        '& .MuiTypography-root': {
            color: theme.palette.black,
            fontSize: 12,
        },
    },
    iconRight: {
        position: 'absolute',
        top: 15,
        right: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBottom: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: '0 8px',
        '& .MuiTypography-root': {
            color: theme.palette.black,
            fontSize: 12,
        },
    },
    icons: {
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 50,
        width: 30,
        height: 30,
        margin: '0 3px',
        textAlign: 'center',
        '& svg.MuiSvgIcon-root': {
            color: theme.palette.black,
            marginTop: 5,
        },
    },
    text: {
        color: theme.palette.black,
        fontSize: 12,
    },
    images: {
        cursor: 'pointer',
        '& img': {
            borderRadius: 10,
            width: '100%',
            objectFit: 'cover',
            '&:hover': {
                transition: '.5s ease',
                backfaceVisibility: 'hidden',
            },
        },
        '& video': {
            borderRadius: 10,
            width: '100%',
        },
        '&:hover': {
            opacity: '0.3',
            width: '100%',
            marginBottom: '0.23rem',
        },
    },
}));

export default styles;
