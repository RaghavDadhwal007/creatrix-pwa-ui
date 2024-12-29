const styles = ((theme) => ({
    signupview_topheader: {
        padding: `${ theme.spacing(1) } 0px`,
        textAlign: 'center',
    },
    signupview_formactionbutton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
    },
    signupview_formsubmitbtnwrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        textAlign: 'center',
        marginTop: '20px',
        '& .MuiTypography-root.sub-title1 ': {
            color: theme.palette.errorColor,
            fontWeight: 'bold',
            fontSize: '0.9rem',
        },
    },
    signupview_policytext: {
        color: theme.palette.cardColors.rememberTxtColor,
        '&.MuiTypography-root': {
            fontSize: '14px',
            [ theme.breakpoints.down('md') ]: {
                fontSize: '12px',
            },
            [ theme.breakpoints.down('tablet') ]: {
                lineHeight: '23px',
            },
        },
        '&:hover a': {
            textDecoration: 'underline',
        },
    },
    signupview_redirecttxt: {
        textAlign: 'center',
        margin: '2rem 0px 1rem 0px',
    },
    signUpView_btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        [ theme.breakpoints.up('md') ]: {
            flexDirection: 'row',
        },
        [ theme.breakpoints.down('sm') ]: {
            flexDirection: 'column',
        },
    },
    signup_btn: {
        [ theme.breakpoints.up('sm') ]: {
            flex: 1,
        },
        [ theme.breakpoints.up('md') ]: {
            flex: 'unset',
        },
    },
    social_btn: {
        [ theme.breakpoints.up('sm') ]: {
            flex: 1,
        },
        [ theme.breakpoints.up('md') ]: {
            flexDirection: 'row',
        },
    },
    signupView_optionText: {
        textAlign: 'center',
        margin: '15px 0',
        color: theme.palette.cardColors.txtColor,
    },
    fbBtn: {
        marginRight: '15px',
        [ theme.breakpoints.down('sm') ]: {
            margin: '15px 0',
        },
    },
    ok_btn: {
        textAlign: 'center',
    },
    spaceWrapper: {
        padding: '0px',
    },
    fadeWrapper: {
        opacity: '30%',
    },
    heading: {
        fontWeight: '600',
        fontSize: '2rem',
        textAlign: 'center',
        color: theme.palette.white,
        paddingTop: '2rem',
        paddingBottom: '2rem',
    },
    iconWidth: {
        minWidth: '2.5rem',
        '& svg': {
            fontSize: '0.8rem',
        },
    },
    googleBtn: {
        marginRight: '15px',
        [ theme.breakpoints.down('sm') ]: {
            margin: '15px 0',
        },
    },
}));

export default styles;
