const styles = ((theme) => ({
    headingWrapper: {
        marginTop: '3rem',
        '&.firstChild': {
            marginTop: '0rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            marginTop: '0',
        },
    },
    noDataFoundWrapper: {
        margin: 'auto auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataFoundImageWrapper: {
        width: '470px',
        height: '400px',
        [ theme.breakpoints.down('tablet') ]: {
            width: '50vw',
            height: 'fit-content',
        },
    },
    mainWrapper: {
        padding: '4rem',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        width: '100%',
        margin: '0 auto',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '90%',
            padding: '2rem 0',
        },
    },
    audioCardWrapper: {
        paddingTop: '25px',
    },
    heading: {
        color: theme.palette.white,
        '&.MuiTypography-root': {
            fontSize: '36px',
            fontWeight: '600',
        },
        [ theme.breakpoints.down('xl') ]: {
            '&.MuiTypography-root': {
                fontSize: '25px',
            },
        },
        [ theme.breakpoints.down('md') ]: {
            '&.MuiTypography-root': {
                fontSize: '18px',
            },
        },
    },
    CardWrapper: {
        width: '100%',
        padding: '1em 0em 2em 0em',
        [ theme.breakpoints.down('tablet') ]: {
            padding: '0 0 20px 0',
            overflowX: 'scroll',
            '&::-webkit-scrollbar-track': {
                borderRadius: '10px',
                backgroundColor: theme.palette.disableColor,
            },
            '&::-webkit-scrollbar': {
                height: '5px',
                backgroundColor: theme.palette.disableColor,
            },
            '&::-webkit-scrollbar-thumb': {
                width: '120px',
                borderRadius: '10px',
                backgroundColor: theme.palette.primaryColor,
            },
        },
    },
}));

export default styles;
