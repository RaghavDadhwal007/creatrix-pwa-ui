const styles = (theme) => ({
    gridWrapper: {
        display: 'flex',
        padding: '3rem 2rem 0rem 2rem',
        marginBottom: '3rem',
        margin: '0 auto',
        marginTop: '100px',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        [ theme.breakpoints.down('tablet') ]: {
            display: 'block',
            padding: '0rem',
            marginBottom: '0rem',
        },
    },
    gridItemWrapper: {
        padding: '0px 2rem',
        marginBottom: '4rem',
    },
    settingsWrapper: {
        [ theme.breakpoints.down('1180') ]: {
            '&.MuiGrid-item': {
                paddingLeft: '0px',
            },
        },
    },
    spaceWrapper: {
        padding: '0 1.5rem',
    },
});
export default styles;
