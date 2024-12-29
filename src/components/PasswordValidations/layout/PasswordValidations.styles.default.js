const styles = ((theme) => ({
    spaceWrapper: {
        padding: '0px',
        '& .MuiTypography-root': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: 12,
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1rem',
            },
        },
    },
    fadeWrapper: {
        opacity: '30%',
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '100%',
        },
    },
    iconWidth: {
        minWidth: '2.5rem',
        '& svg': {
            fontSize: '0.8rem',
        },
    },
    spaceRemoveWrapper: {
        padding: 0,
    },
}));

export default styles;
