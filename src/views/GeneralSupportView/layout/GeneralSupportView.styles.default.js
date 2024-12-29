const styles = ((theme) => ({
    mainContainer: {
        padding: '0rem 0rem 0rem 2rem',
        [ theme.breakpoints.down('tablet') ]: {
            width: '93%',
            margin: '0 auto',
            padding: '0rem',
        },
    },
    heading: {
        '&.heading-1': {
            color: theme.palette.white,
            fontSize: '2rem',
            lineHeight: '44px',
            fontWeight: '600',
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '1.875rem',
            },
            [ theme.breakpoints.up('md') ]: {
                fontSize: '2rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontWeight: '600',
                fontSize: '1.5rem',
                lineHeight: '32px',
            },
        },
    },

    content: {
        marginBottom: '20px',
        '&.caption': {
            fontWeight: '400',
            fontSize: '0.9rem',
            lineHeight: '25px',
            color: theme.palette.white,
        },
    },
    generalSupportContent: {
        margin: '1rem 0rem 1.9rem 0rem',
    },
}));

export default styles;
