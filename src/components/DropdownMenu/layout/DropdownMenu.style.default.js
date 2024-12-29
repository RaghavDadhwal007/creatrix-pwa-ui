const styles = (theme) => ({
    menuItemStyles: {
        '&.MuiMenuItem-root': {
            padding: '0px 10px 0px 10px',
            '&:hover': {
                background: theme.palette.darkBlue,
            },
        },
    },
    menuIconStyles: {
        '&.MuiButtonBase-root': {
            '&.MuiIconButton-root': {
                width: '25px',
                height: '30px',
            },
        },

    },
});

export default styles;
