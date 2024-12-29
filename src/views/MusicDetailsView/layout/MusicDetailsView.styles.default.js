const styles = ((theme) => ({
    root: {
        padding: '4rem',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        width: '100%',
        margin: '0 auto',
    },
    coverImage: {
        position: 'relative',
        height: '50vh',
        [ theme.breakpoints.down('laptoplg') ]: {
            height: '446px',
        },
        [ theme.breakpoints.down('laptop') ]: {
            height: '350px',
        },
    },
    playWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        background: theme.palette.audioBackground,
    },
    playInnerWrapper: {
        cursor: 'pointer',
        padding: '.5rem',
    },
    commonBlockWrapper: {
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        alignSelf: 'center',
    },
    headingWrapper: {
        padding: '2rem 0 1rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            rowGap: '1rem',
        },
    },
    btnsWrapper: {
        display: 'flex',
        gap: '1rem',
        margin: '1rem 0rem',
        [ theme.breakpoints.down('tablet') ]: {
            gap: '1rem',
        },
    },
    recomendationWrapper: {
        padding: '3rem 0',
    },
    tagsWrapper: {
        padding: '2rem 0 0 0',
    },
    recomendationSubWrapper: {
        paddingTop: '2rem',
        position: 'relative',
        flexWrap: 'nowrap',
        minWidth: '25%',
    },
}));

export default styles;
