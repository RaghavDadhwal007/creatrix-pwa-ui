const styles = ((theme) => ({
    buttonMappingWrapper: {
        marginBottom: '1rem',
        padding: '0 1em',
    },
    buttonWrapper: {
        display: 'inline-block',
        margin: '5px',
    },
    settingSidebarTopSectionWrapper: {
        background: theme.palette.secondaryColor,
        borderRadius: '12px',
        padding: '1rem 0rem',
        position: 'sticky',
    },
    sideBarMenu: {
        paddingLeft: '7%',
        paddingRight: '4%',
        '& .MuiTypography-root': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: 12,
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1rem',
            },
        },
    },
    menuWrapper: {
        alignItems: 'center',
        display: 'flex',
        gap: '10px',
        '& svg': {
            fill: theme.palette.white,
        },
    },
    active_menu_item: {
        color: theme.palette.black,
        '& svg': {
            fill: theme.palette.black,
        },
    },
    settingsIconWrapper: {
        height: '20px',
        width: '40px',
        '& svg': {
            height: '30px',
            width: '30px',
        },
    },
}));

export default styles;
