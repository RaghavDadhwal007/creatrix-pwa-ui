const styles = ((theme) => ({
    iconBtnWrapper: {
        width: '6rem',
        [ theme.breakpoints.down('tablet') ]: {
            width: 'auto',
        },
        [ theme.breakpoints.down('sm') ]: {
            width: 35,
        },
        '& svg': {
            height: '5rem',
            width: '5rem',
            [ theme.breakpoints.down('md') ]: {
                height: '4rem',
                width: '4rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                height: 40,
                width: 40,
            },
        },
    },
    container: {
        width: '100%',
    },
    titleBlockWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    titleInnerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-root': {
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 12,
            },
        },
    },
    downloadWrapper: {
        display: 'flex',
        justifyContent: 'center',
        [ theme.breakpoints.down('tablet') ]: {
            display: 'none',
        },
        '& .MuiTypography-root': {
            color: theme.palette.typographyColors.versionColor,
            fontWeight: 600,
            fontSize: 20,
        },
    },
    audioDetailsMidWrapper: {
        [ theme.breakpoints.down('md') ]: {
            display: 'none',
        },
    },
    cardContainer: {
        backgroundColor: theme.palette.cardColors.bgColor,
        borderRadius: '20px',
        width: '100%',
        border: `1px solid ${ theme.palette.cardColors.cardIIBorderColor }`,
        padding: `${ theme.spacing(2) } ${ theme.spacing(2) }`,
        cursor: 'pointer',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '16px 0',
        },
    },
    accordionStyle: {
        background: 'none',
    },
    versionDetails: {
        opacity: '0.7',
        borderRadius: '7px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '10px 0px',
    },
    cardVersionContainer: {
        backgroundColor: theme.palette.cardColors.bgColor,
        borderRadius: '20px',
        maxWidth: '95%',

        border: `1px solid ${ theme.palette.cardColors.cardIIBorderColor }`,
        padding: `${ theme.spacing(2) } ${ theme.spacing(2) }`,
        [ theme.breakpoints.down('tablet') ]: {
            padding: '16px 0',
        },
    },
    actionIconsWrapper: {
        [ theme.breakpoints.up('md') ]: {
            marginTop: '2rem',
        },
    },
    actionIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        width: '40px',
        margin: '2px',
        [ theme.breakpoints.down('md') ]: {
            height: '28px',
            width: '28px',
        },
        [ theme.breakpoints.down('tablet') ]: {
            margin: 0,
            padding: '5px 0',
            backgroundColor: theme.palette.buttonColors.btnSecondaryBgColor,
        },
        borderRadius: '3px',
        backgroundColor: theme.palette.white,
        cursor: 'pointer',
        '&:hover': {
            '& svg': {
                transform: 'scale(1.1)',
            },
        },
    },
    audioViewWarpper: {
        color: theme.palette.white,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '20px',
    },
    wavesWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        '& span': {
            position: 'relative !important',
        },
    },
    wavesInnerWrapper: {
        width: '100%',
    },
    waveStyle: {
        height: '100% !important',
        width: '100% !important',
        position: 'relative !important',
    },
}));

export default styles;
