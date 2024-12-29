const styles = ((theme) => ({
    authModalDialog: {
        width: '70%',
        margin: '0 auto',
        [ theme.breakpoints.down('md') ]: {
            width: '60%',
        },
        [ theme.breakpoints.down('tablet') ]: {
            width: '90%',
        },

    },
    modalActionText: {
        width: '100%',
        textAlign: 'center',
        paddingTop: '10px',
        margin: '2rem 0px 1rem 0px',
    },
}));

export default styles;
