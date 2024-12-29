const styles = ((theme) => ({
    upperHeader: {
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        padding: '0.5rem 1rem',
        '&.background': {
            backgroundColor: theme.palette.buttonColors.darkGrey,
        },
        '&.transparent': {

        },
    },
    rightMenu: {
        display: 'flex',
        gap: '1rem',
    },
    iconButtonStyle: {
        cursor: 'pointer',
        '& svg': {
            width: '24px',
            height: '24px',
            '& path': {
                stroke: theme.palette.white,
            },
        },
    },
    centerHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexGrow: '1',
        gap: '1.5rem',
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '10vh',
        '&.homePage': {
            position: 'absolute',
        },

    },
    mobileHeaderWrapper: {
        backgroundColor: 'transparent',
        zIndex: 999,
    },
    logoDivWrapper: {
        width: '20%',
    },
    menuIcon: {
        '&.MuiSvgIcon-root': {
            color: theme.palette.white,
        },
    },
}));

export default styles;
