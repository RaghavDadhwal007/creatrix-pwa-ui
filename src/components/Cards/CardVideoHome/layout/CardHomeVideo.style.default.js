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
        left: '10%',
        background: `${ theme.palette.white }7A`,
        borderRadius: '6px',
        minWidth: '60%',
        '& h3': {
            margin: '0',
            fontWeight: 'unset',
            fontSize: '1rem',
        },
    },
}));

export default styles;
