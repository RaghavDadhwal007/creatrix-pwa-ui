const styles = ((theme) => ({
    errorPageContainer: {
        width: '100%',
        maxWidth: '1430px',
        margin: '0 auto',
        padding: '0 2rem',
        alignItems: 'center',
        display: 'flex',
        minHeight: '85vh',
        [ theme.breakpoints.down('tablet') ]: {
            textAlign: 'center',
            marginTop: '7rem',
        },
    },
    errorTitle: {
        margin: '12px 0 28px',
    },
    imgBlock: {
        '& span': {
            position: 'unset!important',
        },
    },
}));

export default styles;
