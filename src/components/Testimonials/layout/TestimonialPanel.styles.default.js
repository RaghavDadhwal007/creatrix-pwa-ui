const styles = ((theme) => ({
    innerPanelContainer: {
        width: '320px',
        margin: '0 auto',
        padding: '0em 2em',
        background: theme.palette.white || '#ffffff',
        height: '320px',
        borderRadius: '50%',
        position: 'relative',
        [ theme.breakpoints.down('330') ]: {
            width: '300px',
            height: '300px',
        },
    },
    panelMainContainer: {
        padding: '0em 1em',
        [ theme.breakpoints.down('tablet') ]: {
            padding: 0,
        },
    },
    imageBlock: {
        width: '70px',
        margin: '0 auto',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '-22px',
        '& img': {
            borderRadius: '50%',
        },
    },
    svgIcon: {
        width: '30px',
        margin: '0 auto',
    },
    authorName: {
        fontWeight: 'bold',
        fontSize: '18px',
    },
    subCopyInner: (testimonialStyle) => ({
        fontSize: `${ testimonialStyle?.fontSize }em` || '1em',
        textAlign: testimonialStyle?.Alignment || 'center',
        color: testimonialStyle?.fontColor || '#637381',
        [ theme.breakpoints.down(480) ]: {
            fontSize: '0.8em',
        },
        '& p': {
            margin: '0px',
        },
    }),
    contentBox: {
        textAlign: 'center',
        paddingTop: '4em',
    },
}));

export default styles;
