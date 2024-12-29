const styles = ((theme) => ({
    mainWrapper: {
        padding: '3rem 1rem 0rem 1rem',
        marginBottom: '3rem',
        marginTop: '8rem',
        margin: '0 auto',
        maxWidth: `${ theme.palette.applicationMinWidth }`,
        '& .MuiSelect-select': {
            padding: '0',
            minHeight: '40px',
            [ theme.breakpoints.down('md') ]: {
                minHeight: '30px',
            },
        },
        '& .MuiBox-root': {
            width: '110px',
            marginRight: '10px',
            [ theme.breakpoints.down('md') ]: {
                width: '100px',
            },
        },
        '& .MuiSelect-nativeInput': {
            opacity: '1',
            bottom: 'auto',
            border: 'none',
            color: theme.palette.white,
            paddingLeft: '20px',
            fontSize: '0.9rem',
            [ theme.breakpoints.down('md') ]: {
                width: '100px',
                textTransform: 'capitalize',
                paddingLeft: '10px',
                fontSize: '0.75rem',
            },
        },
        '& .MuiSvgIcon-root': {
            color: theme.palette.white,
            [ theme.breakpoints.down('md') ]: {
                right: '0',
            },
        },
        [ theme.breakpoints.down('tablet') ]: {
            marginBottom: '2rem',
            marginTop: '5rem',
        },
    },
    buttonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        '& .MuiBox-root': {
            width: '110px',
            [ theme.breakpoints.down('tablet') ]: {
                marginTop: '1rem',
                width: '79px',
            },
        },
        [ theme.breakpoints.down('tablet') ]: {
            display: 'block',
        },
    },
    buttonBlock: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiTypography-root': {
            marginRight: '20px',
        },
        '& button.MuiButtonBase-root.icon-btn': {
            margin: '0 5px',
            minHeight: '40px',
            minWidth: '95px',
            padding: '0',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '400',
            [ theme.breakpoints.down('md') ]: {
                fontSize: '0.7rem',
                minHeight: '30px',
                minWidth: '70px',
            },
            [ theme.breakpoints.down('410') ]: {
                minWidth: '58px',
            },
        },
        [ theme.breakpoints.down('tablet') ]: {
            '& .MuiTypography-root': {
                fontSize: '0.8rem!important',
                marginRight: '8px',
            },
        },
        [ theme.breakpoints.down('410') ]: {
            '& .MuiTypography-root': {
                fontSize: '0.5rem!important',
                marginRight: '0',
            },
        },
    },
    container: {
        margin: '4rem 0',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '1rem 0',
        },
    },
    filterBtn: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerContainer: {
        marginRight: '4rem',
        position: 'relative',
        [ theme.breakpoints.down('900') ]: {
            marginRight: '2rem',
            maxWidth: '100%',
        },
    },
    musicContainer: {
        [ theme.breakpoints.down('900') ]: {
            maxWidth: '100%',
        },
    },
    wrapper: {
        display: 'flex',
        [ theme.breakpoints.down('tablet') ]: {
            display: 'block',
        },
    },
    borderLine: {
        border: `1px solid ${ theme.palette.lightGrey }`,
        margin: '2rem 0',
    },
    round: {
        width: '12px',
        height: '12px',
        backgroundColor: theme.palette.lightGrey,
        border: `1px solid ${ theme.palette.lightGrey }`,
        borderRadius: '50%',
        position: 'absolute',
        top: '72px',
        [ theme.breakpoints.down('850') ]: {
            top: '60px',
        },
    },
    secondRound: {
        width: '12px',
        height: '12px',
        backgroundColor: theme.palette.lightGrey,
        border: `1px solid ${ theme.palette.lightGrey }`,
        borderRadius: '50%',
        position: 'absolute',
        top: '72px',
        right: '0',
        [ theme.breakpoints.down('850') ]: {
            top: '60px',
        },
    },
    accordionContainerMain: {
        marginBottom: '8px',
    },
    accordionContainer: {
        backgroundColor: theme.palette.cardColors.bgColor || '#000',
        color: theme.palette.white,
        '& svg': {
            color: theme.palette.white,
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '0',
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    radioBtn: {
        paddingLeft: '0',
        '& svg': {
            width: '0.8em',
            height: '0.8em',
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
                fontSize: '0.75rem',
                flexGrow: '0',
                borderRadius: '8px',
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
    searchTypeWrapper: {
        color: theme.palette.white,
        borderRadius: 8,
        backgroundColor: theme.palette.blackLightShade,
        '& .MuiSelect-nativeInput': {
            backgroundColor: theme.palette.blackLightShade,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        [ theme.breakpoints.up('sm') ]: {
            fontSize: '.7rem',
        },
        [ theme.breakpoints.up('md') ]: {
            fontSize: '.8rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            '&.outlined': {

                backgroundColor: `${ theme.palette.white }00`,
                border: `1px solid ${ theme.palette.white } `,
            },
            '& .MuiSelect-nativeInput': {
                backgroundColor: `${ theme.palette.white }00`,

            },
        },
    },
}));

export default styles;
