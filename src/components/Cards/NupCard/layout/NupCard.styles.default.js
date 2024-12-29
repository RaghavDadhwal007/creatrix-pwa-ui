const styles = ((theme) => ({
    stepHeading: {
        '&.MuiTypography-root': {
            fontWeight: 600,
        },
    },
    imageWrapper: {
        position: 'relative',
        height: '250px',
        width: '100%',
        margin: '2rem 0',
        [ theme.breakpoints.down('laptop') ]: {
            height: '200px',
        },
    },
    cardWrapper: {
        margin: '2rem 0',

    },
    image: {
        borderRadius: '12px',
    },
}));

export default styles;
