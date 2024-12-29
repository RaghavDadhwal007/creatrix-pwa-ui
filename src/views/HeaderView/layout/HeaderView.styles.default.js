const styles = ((theme) => ({
    upperHeader: {
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        padding: '0 1rem',
        '&.background': {
            backgroundColor: theme.palette.buttonColors.darkGrey,
        },
        '&.transparent': {

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
}));

export default styles;
