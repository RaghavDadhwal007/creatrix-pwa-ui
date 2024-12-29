const styles = ((theme) => ({
    collectionContainer: {
        maxWidth: '1440px',
        margin: '2em auto 0em auto',
        width: '100%',
        [ theme.breakpoints.down(1441) ]: {
            padding: '0em 1em',
        },
        [ theme.breakpoints.down('tablet') ]: {
            marginTop: '0',
        },
    },
    slider: {
        width: '100%',
        position: 'relative',
    },
    mainSliderContainer: {
        display: 'flex',
        width: '100%',
        columnGap: '2em',
    },
    mainHeadingCont: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: '2em',
        alignItems: 'center',
    },
    blockHeading: {
        fontSize: '2rem',
        [ theme.breakpoints.down(480) ]: {
            fontSize: '1.5rem',
        },
        fontWeight: 'bold',
        color: theme.palette.white || '#ffffff',
        borderRight: `1px solid ${ theme.palette.white || '#ffffff' }`,
        paddingRight: '2rem',
    },
    viewAll: {
        fontSize: '1rem',
        color: theme.palette.white || '#ffffff',
    },
}));

export default styles;
