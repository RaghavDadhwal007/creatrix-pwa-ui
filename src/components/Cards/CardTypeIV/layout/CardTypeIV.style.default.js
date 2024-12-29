const styles = ((theme) => ({
    cardWrapper: {
        cursor: 'pointer',
    },
    titleWrapper: {
        color: theme.palette.pink,
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
            stroke: theme.palette.white,
        },
    },
    bottomWrapper: {
        marginLeft: '16px',
        marginTop: '16px',
        [ theme.breakpoints.down('xxl') ]: {
            width: '100%',
        },
    },
    mainCardWrapper: {
        cursor: 'pointer',
    },
}));

export default styles;
