const styles = ((theme) => ({
    mainWrapper: {
        position: 'relative',
        '& img': {
            borderRadius: '5px',
            cursor: 'pointer',
        },
    },
    titleWrapper: {
        top: '12%',
        color: theme.palette.white || '#ffffff',
        fontSize: '1em',
        transitionProperty: 'width',
        transitionDuration: '1s',
        width: '80%',
        padding: '0.5em 1em',
        position: 'absolute',
        background: 'rgba(64, 64, 64, 0.90)',
        borderRadius: '0px 6px 6px 0px',
        left: '0',
        '& p,h1,h2,h3,h4,h5,h6': {
            color: theme.palette.white || '#ffffff',
            margin: '0px',
            fontWeight: '700',
        },
    },
}));

export default styles;
