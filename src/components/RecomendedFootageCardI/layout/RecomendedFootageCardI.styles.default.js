const styles = ((theme) => ({
    cardWrapper: {
        position: 'relative',
        cursor: 'pointer',
        marginRight: '10px',
    },
    hoverIconsWrapper: {
        position: 'absolute',
        top: '0px',
        width: '100%',
        padding: '1rem 1rem 0 1rem',
    },
    icon: {
        backgroundColor: theme.palette.white,
        borderRadius: '50%',
        padding: '5px',
        marginLeft: '3px',
        [ theme.breakpoints.down('laptop') ]: {
            padding: '0px',
        },
    },
    timeHoverIcon: {
        backgroundColor: theme.palette.white,
        position: 'absolute',
        bottom: '18px',
        left: '16px',
        padding: '0px 8px',
        borderRadius: '12px',
        '&.MuiTypography-root': {
            fontSize: '0.75rem',
            color: theme.palette.black,
        },
    },
    coverImage: {
        position: 'relative',
        height: '203px',
        width: '323px',
        [ theme.breakpoints.down('laptoplg') ]: {
            height: '150px',
            width: '218px',
        },
        [ theme.breakpoints.down('laptop') ]: {
            height: '100px',
            width: '153px',
        },
    },
}));

export default styles;
