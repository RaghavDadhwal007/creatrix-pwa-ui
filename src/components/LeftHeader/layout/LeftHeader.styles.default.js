const styles = ((theme) => ({
    imageWrapper: {
        height: '50px',
        width: '20%',
        cursor: 'pointer',
    },
    logoDivWrapper: {
        width: '20%',
    },
    linkWrapper: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '2em',
        fontWeight: '1rem',
    },
    flexWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        margin: '20px 0px',
        flexBasis: '50%',
        [ theme.breakpoints.down('laptop') ]: {
            gap: '1rem',
        },
        '& .MuiInputBase-root': {
            backgroundColor: theme.palette.whiteColor,
        },
        '& .MuiInputBase-input': {
            color: theme.palette.white,
        },
        '& .MuiSvgIcon-root': {
            fill: theme.palette.white,
        },
    },
}));

export default styles;
