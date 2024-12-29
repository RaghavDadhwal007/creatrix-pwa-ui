const styles = ((theme) => ({
    tabItem: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '64px',
        padding: '6px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        transition: '.2s all ease-in-out',
        '&:hover': {
            color: theme.palette.primaryColor,
            backgroundColor: theme.palette.whiteColor,
        },
        '&.active': {
            color: theme.palette.primaryColor,
            position: 'relative',
            '& .border': {
                position: 'absolute',
                bottom: 0,
                width: '60%',
                borderRadius: '4px',
                height: '2px',
                background: theme.palette.primaryColor,
            },
        },
    },
}));

export default styles;
