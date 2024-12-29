const styles = ((theme) => ({
    leftBlockWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    captchaColor: {
        background: `${ theme.palette.buttonColors.formCaptchaButton } !important`,
        [ theme.breakpoints.down('tablet') ]: {
            marginBottom: '1.8rem',
        },
    },
    formLabelWrapper: {
        color: theme.palette.white,
    },
    radioWrapper: {
        '&.MuiButtonBase-root': {
            color: theme.palette.buttonColors.radioButtonColor,
        },
    },
    gridWrapper: {
        marginLeft: '1rem',
        paddingTop: '4rem',
        [ theme.breakpoints.down('tablet') ]: {
            marginLeft: '0rem',
            display: 'block',
        },
    },
    gridItemWrapper: {
        [ theme.breakpoints.down('tablet') ]: {
            '&.MuiGrid-item': {
                paddingLeft: '0.5rem',
            },
            maxWidth: '100%',
            padding: '2rem 2.5rem 0 1rem',
        },
    },
    formWrapper: {
        [ theme.breakpoints.down('tablet') ]: {
            '&.MuiGrid-item': {
                paddingLeft: '0.5rem',
                paddingTop: '10px',
            },
            maxWidth: '100%',
        },
    },
    actionButtonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        gap: '1rem',
        [ theme.breakpoints.down('900') ]: {
            marginTop: '2.5rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            display: 'block',
            marginTop: '2rem',
        },
    },
    deviderText: {
        textAlign: 'center',
        padding: '2rem 0rem',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '1.4rem 0rem',
        },
    },
    itemWrapper: {
        marginTop: '2rem',
        '&.itemOutside': {
            marginTop: '2.5rem',
            [ theme.breakpoints.down('tablet') ]: {
                marginTop: '1.5rem',
            },
        },
        '&.itemInside': {
            marginTop: '.7rem',

        },
        '&.itemBlock': {
            marginTop: '1rem',

        },
        [ theme.breakpoints.down('tablet') ]: {
            marginTop: '1.5rem',
        },
    },

    checkBox: {
        color: `${ theme.palette.white } !important`,
        backgroundColor: `${ theme.palette.black } !important`,
        [ theme.breakpoints.down('tablet') ]: {
            marginRight: '15px!important',
        },
    },
    learnMoreHeaing: {
        fontWeight: '400',
        fontSize: '20px',
    },
    learnMoreWrapper: {
        color: `${ theme.palette.commonActiveColor } !important`,
        fontWeight: '600 !important',
        fontSize: '1.3rem !important',
        [ theme.breakpoints.down('md') ]: {
            fontWeight: '500',
            fontSize: '18px',
        },
        [ theme.breakpoints.only('laptop') ]: {
            fontWeight: '500',
            fontSize: '20px',
        },
        [ theme.breakpoints.only('lg') ]: {
            fontWeight: '600',
            fontSize: '20px',
        },
    },
    paymentButton: {
        minWidth: '185px !important',
        padding: '0px !important',
    },
}));

export default styles;
