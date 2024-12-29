const styles = ((theme) => ({
    mainWrapper: {
        width: '100%',
        minHeight: '40vh',
        [ theme.breakpoints.down('xl') ]: {
            padding: '30px 0px',
        },
        [ theme.breakpoints.up('xl') ]: {
            minHeight: '52vh',
            maxWidth: '1440px',
            margin: '0 auto',
        },
        [ theme.breakpoints.down('tablet') ]: {
            padding: 0,
        },
    },
    contentWrapper: {
        '& p,': {
            lineHeight: '1.5',
        },
    },
    commonBlockWrapper: {
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        margin: '0 auto',
        padding: '4rem',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '90%',
            padding: '0 0 2rem 0',
        },
    },
    videoPlayer: {
        height: '100%',
        margin: '4rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '2rem 0',
        },
    },
    recomendationWrapper: {
        padding: '3rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '3rem 0 0',
        },
    },
    recomendationSubWrapper: {
        paddingTop: '2rem',
        position: 'relative',
        flexWrap: 'nowrap',
        minWidth: '25%',
        [ theme.breakpoints.down('tablet') ]: {
            minWidth: '32%',
        },
        [ theme.breakpoints.down('sm') ]: {
            minWidth: '42%',
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            minWidth: '60%',
        },
    },
    descriptionWrapper: {
        borderRadius: '12px',
    },
}));

export default styles;
