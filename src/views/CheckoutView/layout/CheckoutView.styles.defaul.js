const styles = ((theme) => ({
    commonBlockWrapper: {
        marginBottom: '3rem',
        margin: '0 auto',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
    },
    iconWhyCreatigo: {
        width: '20px',
        height: '20px',
    },
    accordionMainWrapper: {
        margin: '2rem 0',
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
    answerContainer: {
        '&.MuiTypography-root': {
            lineHeight: '37px !important',
            overflowWrap: 'break-word',
        },
    },
}));

export default styles;
