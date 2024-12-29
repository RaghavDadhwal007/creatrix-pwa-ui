const styles = ((theme) => ({
    cardWrapper: {
        padding: theme.spacing(1.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    cardInfoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        '& p': {
            textAlign: 'center',
        },
    },
    cardImageWrapper: {
        flexGrow: 1,
        position: 'relative',
        width: '100px',
        height: '100px',
    },
}));

export default styles;
