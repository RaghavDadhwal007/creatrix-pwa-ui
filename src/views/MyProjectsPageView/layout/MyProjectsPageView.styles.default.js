const styles = ((theme) => ({
    mainWrapper: {
        margin: '25px 65px 25px 65px',
        width: '100vw',
    },
    headingWrapper: {
        width: '100%',
        marginBottom: '50px',
    },
    addProjectWrapper: {
        textAlign: 'end',
    },
    addProjectButton: {
        '&.MuiButton-root': {
            backgroundColor: theme.palette.buttonColors.darkGrey,
            textTransform: 'capitalize',
            borderRadius: '8px',
            padding: '5px 15px 5px 15px',
        },
        '&.MuiButtonBase-root:hover': {
            backgroundColor: theme.palette.buttonColors.darkGrey,
        },
    },
    heading: {
        '&.MuiTypography-root': {
            fontSize: '36px',
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
    verticalLine: {
        backgroundColor: theme.palette.buttonColors.lightBlue,
        width: '2px',
        height: '73px',
    },
}));

export default styles;
