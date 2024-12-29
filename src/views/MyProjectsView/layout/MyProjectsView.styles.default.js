const styles = ((theme) => ({
    root: {
        height: '100%',
        padding: '0em 3em',
        [ theme.breakpoints.down('769') ]: {
            padding: '0em 1em',
        },
        width: '100%',
    },
    noProjectWrapper: {
        textAlign: 'center',
        '& div': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    heightWrapper: {
        height: '100%',
        width: '100%',
        [ theme.breakpoints.down('769') ]: {
            marginLeft: '10px',
        },
    },
    addProjectWrapper: {
        textAlign: 'end',
    },
    seeAllText: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '3rem 2rem',
    },
    seeAllLink: {
        '&.MuiTypography-root': {
            textDecorationLine: 'underline',
        },
    },
}));

export default styles;
