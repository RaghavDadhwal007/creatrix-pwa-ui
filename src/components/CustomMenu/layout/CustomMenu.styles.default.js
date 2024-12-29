const styles = ((theme) => ({
    mainWrapper: {
        position: 'relative',
    },
    menuWrapper: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.white,
            padding: '0.7rem 2rem',
            marginTop: '20px',
            width: '318px',
            minHeight: '100px',
            maxHeight: '437px',
            borderRadius: '12px',
            overflow: 'unset',
        },
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 21,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: theme.palette.white,
        borderLeftColor: 'transparent',
        position: 'absolute',
        top: '-26px',
    },
}));

export default styles;
