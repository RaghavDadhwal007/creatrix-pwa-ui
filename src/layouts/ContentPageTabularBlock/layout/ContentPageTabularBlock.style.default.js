const styles = ((theme) => ({
    copyBlock: {
        background: theme.palette.cardColors.cardIIIBackgroundColor || '#262626',
        borderRadius: '6px',
        padding: '2rem',
        margin: '4rem 0',
        fontSize: '1em',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '2rem 1rem',
            margin: '0 auto',
        },
    },
    innerBlock: {
        border: `1px solid ${ theme.palette.white }`,
        padding: '2rem',
        borderRadius: '3px',
        '& p': {
            margin: '5px 0px',
            color: theme.palette.white,
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            padding: '2rem 1.3rem',
        },
    },
    svgIcon: {
        width: '30px',
    },
    desc: {
        '&.MuiTypography-root': {
            lineHeight: '30px',
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '0.8rem',
            },
        },
    },
    tabs: {
        marginRight: '3rem',
        [ theme.breakpoints.down('laptop') ]: {
            marginRight: '2rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            marginRight: '1.3rem',
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            marginRight: '18px',
        },
    },
    tabsContainer: {
        [ theme.breakpoints.down('laptop') ]: {
            marginBottom: '2rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            margin: 0,
        },
    },
    downloadLink: {
        marginBottom: '1em',
        textAlign: 'right',
        '& a': {
            color: theme.palette.buttonColors.btnTxtColor || '#ffffff',
            borderRadius: '5px',
            backgroundColor: theme.palette.primaryColor || '#fb48c4',
            padding: '0.6em 1em',
        },
    },
}));

export default styles;
