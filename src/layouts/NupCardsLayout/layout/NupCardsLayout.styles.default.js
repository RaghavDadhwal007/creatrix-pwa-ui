const styles = ((theme) => ({
    root: {
        [ theme.breakpoints.down('tablet') ]: {
            width: '100%',
            margin: '0 auto',
            flexDirection: 'column',
            marginBottom: '1rem',
            '& .MuiGrid-root': {
                padding: '0rem',
                maxWidth: '100%',
            },
        },
    },
    cardWrapper: {
        margin: '2rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '1rem 0',
        },
    },
}));

export default styles;
