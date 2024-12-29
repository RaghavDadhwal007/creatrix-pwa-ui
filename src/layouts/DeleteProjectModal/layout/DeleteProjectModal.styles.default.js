const styles = ((theme) => ({
    innerWrapper: {
        margin: '0 auto',
    },
    deleteBtn: {
        textAlign: 'center',
        marginTop: '10px',
        '&.MuiButton-root': {
            minWidth: '148px !important',
            [ theme.breakpoints.down('375') ]: {
                minWidth: '130px !important',
            },
        },
    },
    cancelBtn: {
        textAlign: 'center',
        marginTop: '10px',
        '&.MuiButton-root': {
            minWidth: '148px !important',
            border: `1px solid ${ theme.palette.white }`,
            background: 'transparent !important',
            [ theme.breakpoints.down('375') ]: {
                minWidth: '130px !important',
            },
        },
    },
    textWrapper: {
        fontWeight: '600 !important',
        fontSize: '2rem !important',
        textAlign: 'center',
        width: '80%',
        margin: '0 auto',
        paddingBottom: '1rem',
        [ theme.breakpoints.down('375') ]: {
            width: '100%',
        },
    },
    subText: {
        textAlign: 'center',
        fontSize: '1rem !important',
        width: '58%',
        margin: '0 auto',
        padding: '1rem auto',
        [ theme.breakpoints.down('375') ]: {
            width: '100%',
        },
    },
    btnWrapper: {
        display: 'flex',
        justifyContent: 'center',
        columnGap: '1rem',
        marginTop: '0.5rem',
    },
}));

export default styles;
