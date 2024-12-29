const styles = ((theme) => ({
    tabWrapper: {
        padding: '6rem 0px 4rem 0px',
    },
    selectedViewWrapper: {
        marginBottom: '4rem',
        padding: '0 2rem',
        [ theme.breakpoints.down('laptop') ]: {
            maxWidth: '725px',
            margin: '0 auto',
        },
        [ theme.breakpoints.down('1440') ]: {
            maxWidth: '1390px',
            margin: '0 auto',
        },
        [ theme.breakpoints.down('1080') ]: {
            padding: '0rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            padding: '0 1rem',
        },
    },
    blockWrapper: {
        width: 'fit-content',
    },
    commonBlockWrapper: {
        marginBottom: '3rem',
        margin: '0 auto',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
    },
    blockHeading: {
        borderRight: `1px solid ${ theme.palette.white }`,
        paddingRight: '2rem',
    },
    mainWrapper: {
        maxWidth: '1440px',
        margin: '2rem auto',
        padding: '0rem 2rem',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '96%',
            width: '100%',
            padding: '0',
        },
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
