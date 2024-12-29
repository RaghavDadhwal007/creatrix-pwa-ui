const styles = ((theme) => ({
    main: {
        '& .MuiPaper-root': {
            top: '80px !important',
            width: 245,
            right: '40px',
            marginLeft: 'auto',
            padding: '10px 15px',
            borderRadius: 12,
            [ theme.breakpoints.down('md') ]: {
                width: 200,
                margin: '0px 10px 0px auto',
            },
        },
    },
}));

export default styles;
