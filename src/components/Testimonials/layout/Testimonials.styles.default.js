const styles = ((theme) => ({
    mainSliderContainer: {
        width: '100%',
        padding: '1em 0em 2em 0em',
    },
    testimonialSlider: {
        position: 'relative',
        width: '100%',
        '& .slick-list': {
            overflow: 'hidden',
            margin: '0 auto',
            width: '100%',
            [ theme.breakpoints.down('600') ]: {
                paddingLeft: '0px !important',
            },
        },
        '& .slick-list .slick-track': {
            display: 'flex',
            flexDirection: 'row',
            columnGap: '1rem',
            margin: '3em 0em 0em 0em',
        },
        '& .slick-slide': {
            display: 'flex',
            verticalAlign: 'top',
            flexDirection: 'column',
            [ theme.breakpoints.down('tablet') ]: {
                marginBottom: '3rem',
            },
        },
    },

    heading: (styleObj) => ({
        color: styleObj?.headingFontColor || theme.palette.white || '#ffffff',
        fontSize: `${ styleObj?.headingFontSize }em` || '1.5em',
        borderRight: `1px solid ${ theme.palette.white }`,
        padding: '6px 32px 6px 0px',
        [ theme.breakpoints.down('tablet') ]: {
            borderRight: 'none',
            width: '100%',
            fontSize: '1.5em',
            padding: 0,
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            width: '90%',
            margin: '0 auto',
        },
    }),

    testimonialContainer: {
        maxWidth: '1440px',
        width: '100%',
        margin: '30px auto',
        [ theme.breakpoints.down(1441) ]: {
            padding: '0px 15px',
        },
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '90%',
            padding: 0,
            margin: '0 auto',
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            maxWidth: '100%',
        },
    },
}));

export default styles;
