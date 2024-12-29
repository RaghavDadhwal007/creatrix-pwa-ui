const styles = ((theme) => ({
    menuItem: {
        padding: '1rem ',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        color: theme.palette.iconColors.inActiveIconColor,
        '& .active-border': {
            transition: '.2s all ease-in-out',
            opacity: 0,
        },
        '&.active': {
            background: theme.palette.iconColors.inActiveIconColor,
            position: 'relative',
            color: theme.palette.iconColors.activeIconColor,
            borderRadius: '12px',
            '& .active-border': {
                opacity: 1,
                width: '4px',
                background: 'red',
                borderRadius: '10px',
                position: 'absolute',
                top: '10px',
                bottom: '10px',
                left: '10px',
            },
        },
        '&.with-hover': {
            padding: `${ theme.spacing(1) } ${ theme.spacing(2) }`,
        },
        '&.with-hover:hover': {
            borderRadius: theme.palette.radius,
            background: theme.palette.iconColors.inActiveIconColor,
        },
    },
}));

export default styles;
