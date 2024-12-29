const styles = ((theme) => ({
    mainCardWrapper: {
        minHeight: '263px',
        width: '100%',
        marginBottom: '5rem',
        cursor: 'pointer',
    },
    cardBannerWrapper: {
        height: '100%',
        width: '100%',
        borderRadius: '12px',
        position: 'relative',
    },
    projectNameText: {
        '&.MuiTypography-root': {
            padding: '10px 0px 0px 25px',
        },
    },
    opacityBackground: {
        backgroundColor: theme.palette.opacityWhite,
        height: '50px',
        width: '60%',
        position: 'absolute',
        bottom: '51px',
        borderRadius: '0px 6px 6px 0px',
    },
    deleteIconButton: {
        '&.MuiIconButton-root': {
            backgroundColor: theme.palette.white,
            padding: '16px 0px 0px 9px',
            fill: theme.palette.primaryColor,
            stroke: theme.palette.primaryColor,
        },
        '&.MuiIconButton-root:hover': {
            backgroundColor: theme.palette.primaryColor,
            padding: '16px 0px 0px 9px',
            stroke: theme.palette.white,
        },
    },
    label: {
        '&.MuiTypography-root': {
            fontSize: '16px',
            marginTop: '5px',
        },
    },
    labelWrapper: {
        marginTop: '20px',
    },
}));

export default styles;
