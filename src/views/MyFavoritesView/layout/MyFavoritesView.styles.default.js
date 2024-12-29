const styles = ((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        padding: '0em 3em',
        [ theme.breakpoints.down('769') ]: {
            padding: '0em 1em',
        },
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
    },
}));

export default styles;
