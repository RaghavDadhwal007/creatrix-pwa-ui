const styles = ((theme) => ({
    gallery: {
        columnCount: 4,
        [ theme.breakpoints.down('md') ]: {
            columnCount: 3,
        },
    },
    mainWrapper: {
        padding: '3rem 2rem 0rem 2rem',
        marginBottom: '3rem',
        marginTop: '5rem',
        margin: '0 auto',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        '& .MuiSelect-select': {
            padding: '6px 0',
        },
        '& .MuiBox-root': {
            width: 110,
            marginRight: 10,
        },
        '& .MuiSelect-nativeInput': {
            opacity: 1,
            bottom: 'auto',
            border: 'none',
            color: theme.palette.white,
            paddingLeft: 10,
            [ theme.breakpoints.down('md') ]: {
                fontSize: 12,
                paddingLeft: 4,
            },
        },
        '& .MuiSvgIcon-root': {
            color: theme.palette.white,
            [ theme.breakpoints.down('md') ]: {
                right: 0,
            },
        },
    },
    selectWrapper: {
        display: 'flex',
        marginTop: 20,
        marginBottom: 30,
        '& .MuiButtonBase-root.primary-btn': {
            minWidth: 110,
            minHeight: 16,
            marginRight: 10,
            padding: 0,
            fontSize: 15,
            [ theme.breakpoints.down('md') ]: {
                fontSize: 12,
            },
        },
        [ theme.breakpoints.down('tablet') ]: {
            flexWrap: 'wrap',
            rowGap: '10px',
            '& .MuiButtonBase-root.primary-btn': {
                minWidth: '97px',
            },
        },
    },
    buttonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        '& .MuiBox-root': {
            width: 90,
        },
        [ theme.breakpoints.down('tablet') ]: {
            display: 'block',
        },
    },
    buttonBlock: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiTypography-root': {
            marginRight: 20,
        },
        '& button.MuiButtonBase-root.icon-btn': {
            margin: '0 5px',
            minHeight: 28,
            minWidth: 90,
            padding: 0,
            [ theme.breakpoints.down('md') ]: {
                fontSize: 12,
            },
        },
        [ theme.breakpoints.down('tablet') ]: {
            '& .MuiTypography-root': {
                fontSize: '1rem',
            },
        },
    },
}));

export default styles;
