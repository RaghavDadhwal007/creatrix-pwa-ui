const styles = ((theme) => ({
    mainCreativeBlock: {
        position: 'relative',
        paddingBottom: '5em',
        [ theme.breakpoints.down('tablet') ]: {
            paddingBottom: 0,
        },
    },
    imageBlock: {
        width: '70%',
        [ theme.breakpoints.down(1081) ]: {
            width: '75%',
        },
        [ theme.breakpoints.down(901) ]: {
            width: '60%',
            margin: '0 auto',
        },
        [ theme.breakpoints.down('tablet') ]: {
            width: '80%',
        },
    },
    mainHeading: (styleObj) => ({
        color: styleObj?.headingFontColor || theme.palette.white,
        textAlign: 'right',
        fontSize: `${ styleObj?.headingFontSize }em` || '1.4em',
        padding: '10px 0px',
        fontWeight: '600',
    }),
    rightHeading: (styleObj) => ({
        right: '-75px',
        position: 'absolute',
        fontSize: `${ styleObj?.rightHeadingFontSize }em`  || '1.2em',
        color: styleObj?.rightFontColor || theme.palette.white || '#ffffff',
        transform: 'rotate(90deg)',
        top: '40px',
        fontWeight: '600',
    }),
    imageInner: {
        position: 'relative',
    },
    copyBlock: (styleObj) => ({
        position: 'absolute',
        top: '45%',
        color: styleObj?.copyFontColor ||  theme.palette.white || '#ffffff',
        width: '62%',
        background: theme.palette.cardColors.cardIIIBackgroundColor || '#262626',
        borderRadius: '6px',
        padding: '12px',
        right: '2%',
        fontSize: `${ styleObj?.copyFontSize }em` || '1em',
        [ theme.breakpoints.down(1081) ]: {
            width: '82%',
            top: '65%',
        },
        [ theme.breakpoints.down(901) ]: {
            top: '60%',
            width: '70%',
            margin: '0 auto',
            left: '0',
            right: '0',
        },
        [ theme.breakpoints.down(681) ]: {
            top: '45%',
        },
        [ theme.breakpoints.down('tablet') ]: {
            position: 'relative',
            width: '100%',
            marginTop: '1em',
        },

    }),
    innerBlock: {
        border: `1px solid ${ theme.palette.white }`,
        borderRadius: '10px',
        padding: '12px',
        '& p': {
            margin: '5px 0px',
            lineHeight: 1.7,
            color: theme.palette.white,
        },
    },
    svgIcon: {
        width: '30px',
    },
}));

export default styles;
