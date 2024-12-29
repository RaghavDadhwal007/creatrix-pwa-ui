const styles = (() => ({
    menuItem: {
        padding: '0.6rem 0',
    },
    menuBtnWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5rem',
    },
    menuBtn: {
        '&.MuiButton-root': {
            borderRadius: '5px',
            minHeight: '45px',
        },
    },
    subWrapper: {
        overflow: 'scroll',
        maxHeight: '240px',
        padding: '0.5rem 0',
        margin: 'auto 0',
    },
}));

export default styles;
