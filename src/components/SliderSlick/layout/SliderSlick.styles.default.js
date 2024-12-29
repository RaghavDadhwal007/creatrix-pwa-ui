const styles = ((theme) => ({
    sliderWrapper: {
        position: 'relative',
        width: '100%',
        '& .slick-list': {
            overflow: 'hidden',
            margin: '0 auto',
            width: '100%',
            [ theme.breakpoints.down('600') ]: {
                paddingLeft: '0px !important',
            },
            [ theme.breakpoints.down('tablet') ]: {
                overflow: 'visible',
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
        },
    },
}));

export default styles;
