const styles = ((theme) => ({
    mainSliderContainer: {
        maxWidth: '1440px',
        width: '100%',
    },
    subCollectionSlider: {
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
}));

export default styles;
