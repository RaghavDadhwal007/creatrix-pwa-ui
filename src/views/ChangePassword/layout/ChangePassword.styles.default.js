const styles = ((theme) => ({
    mainWrapper: {
        backgroundColor: theme.palette.darkGrey,
        borderRadius: '12px',
        border: `1px solid ${ theme.palette.white }`,
        minHeight: '90%',
        padding: '3rem',
        [ theme.breakpoints.down('laptop') ]: {
            padding: '3rem 1rem',
        },
    },
    formWrapper: {
        padding: '2rem 0rem 2rem 0rem',
        '& .MuiFormLabel-root': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: 14,
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 18,
            },
        },
    },
    buttonWrapper: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    error: {
        textAlign: 'center',
        marginTop: '20px',
        '& .MuiTypography-root.sub-title1 ': {
            color: theme.palette.errorColor,
            fontWeight: 'bold',
            fontSize: '0.9rem',
        },
    },
    container: {
        paddingRight: '2rem',
        maxWidth: '820px',
        [ theme.breakpoints.down('tablet') ]: {
            margin: 'auto 1em',
            paddingRight: '0rem',
        },
        [ theme.breakpoints.down('laptop') ]: {
            padding: '0',
        },
    },
}));

export default styles;
