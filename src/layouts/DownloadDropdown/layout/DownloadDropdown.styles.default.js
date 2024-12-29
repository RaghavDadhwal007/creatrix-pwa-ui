const styles = ((theme) => ({
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
    checkItem: {
        display: 'flex',
        marginTop: '1rem',
        columnGap: '10px',
        alignItems: 'center',
        cursor: 'pointer',
    },
    subWrapper: {
        padding: '1rem 0rem',
    },
    downloadItemText: {
        '&.MuiTypography-root': {
            color: theme.palette.black,
        },
    },
}));

export default styles;
