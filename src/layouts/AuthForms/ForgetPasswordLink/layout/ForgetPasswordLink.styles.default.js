const styles = ((theme) => ({
    resetpasswordview_formsubmitbtnwrapper: {
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
    gobackview_link: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '170px',
    },
    backView_text: {
        alignSelf: 'flex-end',
    },
    forgetpassword_subtitle: {
        maxWidth: '64%',
        margin: '0 auto 20px',
        [ theme.breakpoints.down('md') ]: {
            maxWidth: '80%',
            margin: '0 auto 15px',
        },
    },
}));

export default styles;
