const styles = ((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        padding: '150px',
        [ theme.breakpoints.down('xl') ]: {
            padding: '200px 0px 0px 0px',
        },
    },
    monthTag: {
        fontWeight: 400,
        fontSize: '16px',
        marginLeft: '8px',
    },
    checkIcon: {
        marginRight: '10px',
    },
    centerAlign: {
        textAlign: 'center',
    },
    contactLink: {
        color: theme.palette.cardColors.cardCheckListColor,
        textAlign: 'center',
        position: 'relative',
        bottom: '10px',
    },
    cardWrapper: {
        backgroundColor: theme.palette.white,
        height: '100%',
        borderRadius: '24px',
        position: 'relative',
        '&.starter': {
            background: `linear-gradient(-45deg, ${ theme.palette.varientGreen }, ${ theme.palette.pink })`,
            bottom: '120px',
            height: '600px',
            [ theme.breakpoints.down('xl') ]: {
                height: '100%',
            },
            [ theme.breakpoints.down('laptoplg') ]: {
                height: '100%',
            },
            [ theme.breakpoints.down('laptop') ]: {
                height: '100%',
                width: '130%',
                position: 'relative',
                right: '28px',
            },
        },
    },
    buttonWrapper: {
        paddingBottom: '20px',
        [ theme.breakpoints.down('xl') ]: {
            paddingBottom: '20px',
        },
        [ theme.breakpoints.down('laptop') ]: {
            paddingBottom: '20px',
        },
    },
}));

export default styles;
