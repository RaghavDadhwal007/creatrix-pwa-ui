const styles = ((theme) => ({
    alertMsgContainer: {
        paddingBottom: '5rem',
    },
    container: {
        marginTop: '5.6rem',
        position: 'fixed',
        width: '100%',
        zIndex: '99999',
        '&.success': {
            backgroundColor: theme.palette.secondaryColor,
        },
        '&.failed': {
            backgroundColor: theme.palette.primaryColor,
        },
    },
    paymentMsg: {
        padding: '1rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    closeIcon: {
        color: theme.palette.white,
        fontSize: '2rem',
        cursor: 'pointer',
    },
}));

export default styles;
