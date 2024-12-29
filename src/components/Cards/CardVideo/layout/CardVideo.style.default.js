const styles = ((theme) => ({
    root: {
        height: '263px',
        width: '90%',
        margin: '20px 0px 40px 0px',
        [ theme.breakpoints.down('laptop') ]: {
            width: '419px',
        },
    },
    mainWrapper: {
        margin: 'auto auto',
        position: 'relative',
        minHeight: '200px',
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        borderRadius: '10px',
    },
}));

export default styles;
