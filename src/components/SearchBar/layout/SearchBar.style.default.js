const styles = ((theme) => ({
    searchBarWrapper: {
        backgroundColor: theme.palette.grey,
        borderRadius: '10px',
        padding: '7px 9px 10px 25px',
        '&.download-page': {
            backgroundColor: theme.palette.grey,
        },
        '&.faq-page': {
            backgroundColor: theme.palette.black,
            borderRadius: '0px',
            padding: '13px 30px',
        },
    },
    textField: {
        color: theme.palette.white,
    },
    searchIcon: {
        cursor: 'pointer',
    },
}));

export default styles;
