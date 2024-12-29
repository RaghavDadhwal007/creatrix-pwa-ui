const styles = ((theme) => ({
    btnBlockWrapper: {
        display: 'flex',
        alignItems: 'center',
        [ theme.breakpoints.down('tablet') ]: {
            width: '90%',
            flexDirection: 'column',
        },
        [ theme.breakpoints.down('sm') ]: {
            width: '100%',
        },
    },
    contactUsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20rem',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    contactInnerUsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [ theme.breakpoints.down('tablet') ]: {
            width: '70%',
            margin: '0 auto',
        },
        [ theme.breakpoints.down('sm') ]: {
            width: '90%',
        },
    },
    contactHeading: {
        marginBottom: '2rem',
        color: theme.palette.white,
        fontSize: '22px',
        lineHeight: '20px',
    },
    headingWrapper: {
        color: theme.palette.white,

    },
    btnWrapper: {
        padding: '12px 20px',
        border: `1px solid ${ theme.palette.white }`,
        color: theme.palette.white,
        borderRadius: '6px',
        backgroundColor: '#FB48C4',
        marginRight: 20,
        [ theme.breakpoints.down('tablet') ]: {
            width: '100%',
            padding: '14px 20px',
            margin: '10px 0',
        },
    },
}));

export default styles;
