const styles = ((theme) => ({

    signinview_formactionbutton: {
        padding: `${ theme.spacing(1) } 0px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [ theme.breakpoints.down('tablet') ]: {
            padding: `${ theme.spacing(2) } 0px`,
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            padding: '0rem',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& .MuiTypography-root': {
                marginTop: '1rem',
            },
            '& .MuiFormControlLabel-label': {
                margin: '0rem',
            },
            '& .MuiFormGroup-root': {
                marginTop: '1rem',
            },
        },
    },
    signinview_formsubmitbtnwrapper: {
        padding: `${ theme.spacing(1) } 0px`,
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
    signinView_optionText: {
        textAlign: 'center',
        margin: '15px 0',
        color: theme.palette.cardColors.txtColor,
    },
    signinview_forgetbutton: {
        color: theme.palette.buttonColors.forgetBtn,
    },
    signinView_btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        [ theme.breakpoints.down('sm') ]: {
            flexDirection: 'column',
        },
        [ theme.breakpoints.up('md') ]: {
            flexDirection: 'row',
        },
    },
    login_btn: {
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
    googleBtn: {
        marginRight: '15px',
        [ theme.breakpoints.down('sm') ]: {
            margin: '15px 0',
        },
    },
}));

export default styles;
