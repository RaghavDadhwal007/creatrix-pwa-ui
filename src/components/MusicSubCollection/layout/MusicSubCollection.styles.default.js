const styles = ((theme) => ({
    mainWrapper: {
        flex: '33.3%',
        position: 'relative',
        '& img': {
            borderRadius: '5px',
            cursor: 'pointer',
        },
    },
    sliderMain: {
        width: '100%',
        [ theme.breakpoints.down('tablet') ]: {
            marginBottom: '2rem',
        },
    },
    InnerMainWrapper: {
        cursor: 'pointer',
    },
    playIcon: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        top: '40%',
        color: theme.palette.white || '#ffffff',
        cursor: 'pointer',
        '& svg': {
            fontSize: '3.5em',
        },
    },
    titleWrapper: {
        top: '12%',
        transitionProperty: 'width',
        transitionDuration: '1s',
        width: '80%',
        padding: '0.5em 1em',
        position: 'absolute',
        background: 'rgba(64, 64, 64, 0.90)',
        borderRadius: '0px 6px 6px 0px',
        left: '0',
        color: theme.palette.white,
    },
    viewLink: (styleObj) => ({
        '& a': {
            color: styleObj?.headingFontColor || theme.palette.white || '#ffffff',
            fontWeight: '700',
            fontSize: `${ styleObj?.headingFontSize || 1 }em`,
        },
    }),
}));

export default styles;
