const styles = ((theme) => ({
    navLine: {
        backgroundColor: theme.palette.white,
        width: '100%',
        height: '5px',
        borderRadius: '12px',
    },
    selectedLine: {
        backgroundColor: theme.palette.primaryColor,
        height: '5px',
        width: '7%',
        position: 'relative',
        bottom: '5px',
        borderRadius: '12px',
        '&.option-1': {
            left: '0px',
            transition: 'left 1s',
        },
        '&.option-2': {
            left: '83px',
            transition: 'left 1s',
            [ theme.breakpoints.only('mobilelg') ]: {
                left: '80px',
            },
            [ theme.breakpoints.down('375') ]: {
                left: '77px',
            },
        },
        '&.option-3': {
            left: '190px',
            transition: 'left 1s',
            [ theme.breakpoints.only('mobilelg') ]: {
                left: '187px',
            },
            [ theme.breakpoints.down('375') ]: {
                left: '172px',
            },
        },
        [ theme.breakpoints.down('xl') ]: {
            width: '11%',
        },
        [ theme.breakpoints.down('laptoplg') ]: {
            width: '15%',
        },
        [ theme.breakpoints.down('laptop') ]: {
            width: '22%',
        },
    },
    optionItem: {
        marginRight: '30px',
        [ theme.breakpoints.down('375') ]: {
            marginRight: '20px',
        },
    },
}));

export default styles;
