const styles = (theme) => ({
    root: {
        padding: '120px 0px 25px 0px',
        [ theme.breakpoints.down('xl') ]: {
            padding: '130px 0px 20px 0px',
        },
        [ theme.breakpoints.down(768) ]: {
            padding: '50px 0px 20px 0px',
        },
    },
    monthTag: {
        fontWeight: 400,
        fontSize: '16px',
        marginLeft: '8px',
    },
    cardWrapper: {
        backgroundColor: theme.palette.white,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        maxWidth: '356px',
        margin: '0 20px',
        position: 'relative',
        minHeight: '550px',
        padding: '2rem 0',
        transition: 'all 1s ease',
        [ theme.breakpoints.down(1340) ]: {
            maxWidth: '320px',
        },
        [ theme.breakpoints.down(1260) ]: {
            maxWidth: '290px',
        },
        [ theme.breakpoints.down(1080) ]: {
            minHeight: '520px',
        },
        [ theme.breakpoints.down(1024) ]: {
            maxWidth: '210px',
            minHeight: '430px',
            margin: '0 10px',
        },
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '100%',
            minHeight: 550,
            width: '100%',
            margin: '0px auto 30px auto',
        },
        '&.selected': {
            backgroundImage: 'url(https://images.contentstack.io/v3/assets/blt1e8ebfffae03d059/blt77d1014ff638ca6c/6327e959cf5c146ec73868bd/newBackGround.png)',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            minWidth: '430px',
            backgroundSize: 'cover',
            [ theme.breakpoints.down(1340) ]: {
                minWidth: '360px',
            },
            [ theme.breakpoints.down(1260) ]: {
                minWidth: '305px',
            },
            [ theme.breakpoints.down(1080) ]: {
                minHeight: '520px',
            },
            [ theme.breakpoints.down(1024) ]: {
                minWidth: '270px',
                minHeight: '420px',
                margin: '0 10px',
            },
            [ theme.breakpoints.down('tablet') ]: {
                minWidth: 'auto',
                minHeight: 550,
                width: '100%',
                margin: '0px auto 30px auto',
                transform: 'none',
            },
            transition: 'all 1s ease',
            transform: 'translate(0, -14%)',
            borderRadius: '8px',
            minHeight: '550px',
        },
        '&.disable': {
            cursor: 'not-allowed',
        },
    },
    btn: {
        position: 'absolute',
        bottom: '0px',
        marginLeft: '10px',
        [ theme.breakpoints.down(1025) ]: {
            minWidth: '180px !important',

        },
    },
    selectedBtn: {
        position: 'absolute',
        bottom: '0px',
        [ theme.breakpoints.down(1080) ]: {
            bottom: '30px',
        },
    },
    proselectedBtn: {
        position: 'absolute',
        bottom: '10px',
        [ theme.breakpoints.down(1080) ]: {
            bottom: '30px',
        },
    },
    propCardDesc: {
        color: `${ theme.palette.lightBlueShade } !important`,
    },
    planCardContainer: {
        [ theme.breakpoints.down('laptop') ]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        [ theme.breakpoints.down(768) ]: {
            flexDirection: 'column',
        },
    },
    planButton: {
        '&.disable': {
            filter: 'invert(0.30)',
            cursor: 'not-allowed',
        },
    },
    planDisable: {
        cursor: 'not-allowed',
        position: 'relative',
        overflow: 'hidden',
        '&:hover ': {
            '& $portfolioHover': {
                left: '0',
                opacity: '0.9',
                visibility: 'visible',
                transition: 'all 0.7s ease-in',
            },
        },
    },
    portfolioHover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '-70%',
        top: 0,
        opacity: 0,
        bottom: 0,
        transition: 'all 0.7s ease-in',
        visibility: 'hidden',
        backgroundColor: theme.palette.white,
        color: theme.palette.primaryColor,
        fontSize: 28,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& div': {
            width: '80%',
            textAlign: 'center',
            margin: '0 auto',
        },
    },
});

export default styles;
