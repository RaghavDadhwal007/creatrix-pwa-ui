const styles = ((theme) => ({
    root: {
        [ theme.breakpoints.down('tablet') ]: {
            width: '93%',
            padding: '0rem',
            margin: '0 auto',
        },
    },
    imageWrapper: {
        position: 'relative',
        height: '250px',
        width: '100%',
        margin: '2rem 0',
        [ theme.breakpoints.down('laptop') ]: {
            height: '200px',
        },
        [ theme.breakpoints.down('tablet') ]: {
            margin: '1rem 0',
        },
    },
    image: {
        borderRadius: '12px',
    },
    subDummyBtnWrapper: {
        '& .MuiButtonBase-root': {
            margin: '1rem 0',
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: '36px',
            },
        },
    },
    noteWrapper: {
        margin: '2rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '1rem 0 0',
        },
    },
    desc: {
        position: 'relative',
        left: '50px',
        width: '90%',
    },

    stepHeading: {
        '&.MuiTypography-root': {
            fontWeight: 600,
        },
    },
    formWrapper: {
        margin: '2rem 0',
    },
    submitBtn: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
    },
    formSubWrapper: {
        margin: '2rem 0',
    },
}));

export default styles;
