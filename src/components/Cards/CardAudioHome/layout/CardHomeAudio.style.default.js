const styles = ((theme) => ({
    root: {
        width: '90%',
        margin: '20px 0px 40px 0px',
        [ theme.breakpoints.down('laptop') ]: {
            width: '419px',
        },
    },
    mainWrapper: {
        margin: 'auto auto',
        position: 'relative',
        objectFit: 'cover',
        overflow: 'hidden',

    },

    titleWrapper: {
        padding: '0.7rem',
        position: 'absolute',
        bottom: '12%',
        background: `${ theme.palette.white }7A`,
        borderRadius: '0px 6px 6px 0px',
        minWidth: '60%',
    },
}));

export default styles;
