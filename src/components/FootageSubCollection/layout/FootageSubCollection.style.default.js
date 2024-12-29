const styles = ((theme) => ({
    mainFootageContainer: {
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        [ theme.breakpoints.down(1441) ]: {
            padding: '0px 10px',
        },
    },
    heading: {
        color: theme.palette.white || '#ffffff',
        fontSize: '2rem',
        fontWeight: 'bold',
        borderRight: `1px solid ${ theme.palette.white || '#ffffff' }`,
        paddingRight: '2rem',
        '& p,h1,h2,h3,h4,h5,h6': {
            margin: '0px',
        },
    },
    outerContainer: {
        display: 'flex',
        gap: '2em',
    },
    slider: {
        width: '17%',
        transitionProperty: 'width',
        transitionDuration: '1s',
        position: 'relative',
        '&>span': {
            height: '367px !important',
        },
    },
    expandWidth: {
        width: '30%',
        '&>span': {
            height: '367px !important',
        },
    },
    headingContainer: {
        display: 'flex',
        margin: '3em 0em 2em 0em',
        [ theme.breakpoints.down('tablet') ]: {
            marginTop: '0',
        },
    },
    videoPlayer: {
        borderRadius: '12px',
        objectFit: 'cover',
        cursor: 'pointer',
        width: '100%',
        height: '440px', // for the thumbnail
        [ theme.breakpoints.down('tablet') ]: {
            height: '440px', // for the thumbnail
        },
        [ theme.breakpoints.down(1261) ]: {
            height: '380px', // for the thumbnail
        },
        '&:not(:root):fullscreen': {
            objectFit: 'contain !important',
        },
    },

    subCollectionSlider: {
        position: 'relative',
        width: '100%',
        '& .slick-list': {
            overflow: 'hidden',
            margin: '0 auto',
            width: '100%',
            [ theme.breakpoints.down('600') ]: {
                paddingLeft: '0px !important',
            },
        },
        '& .slick-list .slick-track': {
            display: 'flex',
            flexDirection: 'row',
            columnGap: '1rem',
        },
        '& .slick-slide': {
            display: 'flex',
            verticalAlign: 'top',
            flexDirection: 'column',
            [ theme.breakpoints.down('tablet') ]: {
                marginBottom: '3rem',
            },
        },
    },
    footageTitle: {
        top: '5%',
        color: theme.palette.white || '#ffffff',
        fontSize: '1em',
        transitionProperty: 'width',
        transitionDuration: '1s',
        fontFamily: theme.typography.fontFamily,
        fontWeight: '600',
        width: '80%',
        padding: '0.5em 1em',
        position: 'absolute',
        background: 'rgba(64, 64, 64, 0.90)',
        borderRadius: '0px 6px 6px 0px',
        left: '0',
    },
    expandFootageTitle: {
        width: '60%',
    },
    playIcon: {
        position: 'absolute',
        bottom: '6%',
        color: theme.palette.white || '#ffffff',
        cursor: 'pointer',
        left: '6%',
        '& svg': {
            fontSize: '2.5em',
        },
    },
}));

export default styles;
