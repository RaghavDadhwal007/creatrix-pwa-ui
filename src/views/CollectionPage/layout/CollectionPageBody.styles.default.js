const styles = ((theme) => ({
    containerPageBody: {
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        margin: '0 auto',
        padding: '3rem 2rem 0rem 2rem',
    },
    gallery: {
        columnCount: 4,
        [ theme.breakpoints.down('md') ]: {
            columnCount: 3,
        },
    },
    lengthText: {
        padding: '1.5rem 0',
    },
}));

export default styles;
