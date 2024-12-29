const styles = ((theme) => ({
    footerContainer: {
        display: 'flex',
        alignItems: 'end',
        padding: '2rem 2rem 2rem',
        [ theme.breakpoints.down('900') ]: {
            height: 'auto',
        },
    },
    container: {
        backgroundColor: theme.palette.black,
    },
    footerInnerContainer: {
        [ theme.breakpoints.down('920') ]: {
            flexWrap: 'wrap',
        },
    },
}));

export default styles;
