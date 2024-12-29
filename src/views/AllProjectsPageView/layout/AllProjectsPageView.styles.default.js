const styles = ((theme) => ({
    mainWrapper: {
        width: '100%',
        height: '100%',
        padding: '1rem 2rem 0rem 2rem',
        marginBottom: '3rem',
        margin: '0 auto',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        [ theme.breakpoints.down('xl') ]: {
            padding: '30px 40px 30px 40px',
        },
    },
    headingWrapper: {
        width: '100%',
        marginBottom: '35px',
        padding: '5rem 1rem 0px 1rem',
    },
    addProjectWrapper: {
        textAlign: 'end',
    },
    heading: {
        '&.MuiTypography-root': {
            fontSize: '1.5rem',
        },
    },
    verticalLine: {
        backgroundColor: theme.palette.lightBlue,
        width: '2px',
        height: '73px',
        margin: '0 3rem',
    },
    noProjectWrapper: {
        textAlign: 'center',
        '& div': {
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    breadCrumbIcon: {
        color: theme.palette.white,
    },
    headingBlock: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default styles;
