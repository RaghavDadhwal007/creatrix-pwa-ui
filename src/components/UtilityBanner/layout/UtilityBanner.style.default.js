const styles = ((theme) => ({
    UtilityBannerMain: {
        width: '100%',
        display: 'flex',
        margin: '10px auto',
        padding: '30px',
        [ theme.breakpoints.down(1441) ]: {
            padding: '30px 0px',
        },
        [ theme.breakpoints.down('tablet') ]: {
            position: 'relative',
            marginTop: '0 !important',
            width: '100%',
            borderRadius: 0,
            background: 'none',
            justifyContent: 'space-between',
            padding: '16px 10px 0px 10px',
        },
    },
    imageItemWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        [ theme.breakpoints.down('tablet') ]: {
            flexDirection: 'column',
            textAlign: 'center',
            width: '43%',
            margin: '0px 9px 28px',
            '& .imageItemWrapper:last-child': {
                marginBottom: '0',
            },
        },
    },
    featureHeadWrapper: {
        padding: '0px 16px',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '10px 0 0',
        },
    },
    featureHeading: {
        color: theme.palette.white,
        fontSize: 20,
        fontWeight: 'bold',
        [ theme.breakpoints.down('tablet') ]: {
            fontSize: '0.875rem',
        },
    },
    featureSubcopy: {
        paddingTop: '5px',
        fontSize: 16,
        color: theme.palette.white,
        [ theme.breakpoints.down('tablet') ]: {
            fontSize: '0.75rem',
            paddingTop: '2px',
        },
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0 2rem',
        [ theme.breakpoints.down(1441) ]: {
            padding: '0em 1em',
        },
        [ theme.breakpoints.down('tablet') ]: {
            padding: 0,
            marginTop: '2rem',
        },
    },
    innerBanner: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        margin: '0 auto',
        [ theme.breakpoints.down('tablet') ]: {
            flexWrap: 'wrap',
            justifyContent: 'unset',
        },
    },
    image: {
        [ theme.breakpoints.down('tablet') ]: {
            width: '40px',
            height: '40px',
            margin: '0 auto',
        },
    },
}));

export default styles;
