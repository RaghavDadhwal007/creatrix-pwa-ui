const styles = ((theme) => ({
    headingWrapper: {
        marginTop: '2rem',
        '&.firstChild': {
            marginTop: '0rem',
        },
    },

    heading: {
        color: theme.palette.white,
        '&.MuiTypography-root': {
            fontSize: '36px',
            fontWeight: '600',
        },
        [ theme.breakpoints.down('xl') ]: {
            '&.MuiTypography-root': {
                fontSize: '25px',
            },
        },
        [ theme.breakpoints.down('md') ]: {
            '&.MuiTypography-root': {
                fontSize: '18px',
            },
        },
    },

}));

export default styles;
