const styles = ((theme) => ({
    loadingWrapper: {
        display: 'flex',
        '& .small': {
            width: '20px !important',
            height: '20px !important',
            paddingRight: '10px',
            color: theme.palette.white,
            '& svg': {
                width: '20px !important',
                height: '20px !important',
            },
        },
    },
}));

export default styles;
