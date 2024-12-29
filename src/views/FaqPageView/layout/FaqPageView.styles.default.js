const styles = ((theme) => ({
    mainWrapper: {
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '4rem 2rem',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '100%',
            width: '100%',
            padding: '2rem 0rem 0rem',
        },
    },
    searchMainWrapper: {
        backgroundColor: theme.palette.grey,
        borderRadius: '12px',
        padding: '3rem',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '1.5rem',
            borderRadius: '4px',
        },
    },
    tagWrapper: {
        margin: '2rem 0',
    },
    tagBtn: {
        margin: '0.5rem',
    },
    accordionContainer: {
        borderRadius: '20px',
        backgroundColor: theme.palette.cardColors.cardIIIBackgroundColor,
        color: theme.palette.white,
        margin: '1rem 0',
        padding: '1rem',
        '& svg': {
            color: theme.palette.white,
        },
        [ theme.breakpoints.down('tablet') ]: {
            borderRadius: '4px',
            padding: '1rem 0rem',
        },
    },
    summaryContainerText: {
        '&.sub-title4': {
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '120%',
        },
    },
    accordionMainWrapper: {
        margin: '4rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '2rem 0',
        },
    },
    answerContainer: {
        '&.MuiTypography-root': {
            lineHeight: '37px !important',
            overflowWrap: 'break-word',
        },
    },
    submitbtn: {
        display: 'flex',
        justifyContent: 'center',
        '& .MuiButtonBase-root': {
            [ theme.breakpoints.down('tablet') ]: {
                borderRadius: '4px',
            },
        },
    },
    formWrapper: {
        margin: '2rem 0',
    },

}));

export default styles;
