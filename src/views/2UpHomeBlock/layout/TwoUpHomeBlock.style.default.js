const styles = ((theme) => ({
    mainContainer: {
        padding: '0px 10px',
        [ theme.breakpoints.down('tablet') ]: {
            padding: 0,
        },
    },
    mainTwoUpBlocks: {
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: '40px 0px',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '90%',
        },
    },
}));

export default styles;
