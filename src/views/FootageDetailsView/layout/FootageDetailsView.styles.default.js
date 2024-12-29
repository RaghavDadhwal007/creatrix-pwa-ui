const styles = ((theme) => ({
    root: {
        padding: '4rem',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        width: '100%',
        margin: '0 auto',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '1rem',
        },
    },
    rootSkelton: {
        padding: '0rem 4rem',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        width: '100%',
        margin: '0 auto',
    },
    coverImage: {
        position: 'relative',
        height: '600px',
        [ theme.breakpoints.down('laptoplg') ]: {
            height: '446px',
        },
        [ theme.breakpoints.down('laptop') ]: {
            height: '350px',
        },
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
        [ theme.breakpoints.down('tablet') ]: {
            rowGap: '1rem',
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
    relatedFootageWrapper: {
        paddingTop: '2rem',
        position: 'relative',
        flexWrap: 'nowrap',
        minWidth: '25%',
        [ theme.breakpoints.down('tablet') ]: {
            paddingTop: '0rem',
        },
    },
    techBtn: {
        textAlign: 'end',
    },
    titleTxt: {
        wordWrap: 'break-word',
    },
    descTxt: {
        margin: '1.3rem 0',
        wordWrap: 'break-word',

    },
    viewportLineWrapper: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
        justifyContent: 'center',
        margin: '2rem 0 0',
    },
    redLine: {
        backgroundColor: theme.palette.redColor,
        height: '5px',
        width: '200px',
        borderRadius: '8px',
    },
    videoPlayer: {
    },
}));

export default styles;
