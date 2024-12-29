const styles = ((theme) => ({
    container: {
        borderRadius: '10px',
        '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'unset',
            maxWidth: '750px',
            minHeight: '750px',
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: 'auto',
            },
        },
        '& .dialog_inner_wrapper': {
            position: 'relative',
            // backgroundColor: (props) => ((props.primary) ? theme.palette.green : theme.palette.pink), // it is giving transparent color in development mode
            borderRadius: '70%',
            maxWidth: '750px',
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [ theme.breakpoints.down('tablet') ]: {
                borderRadius: 30,
                paddingBottom: 15,
                minHeight: '300px',
            },
        },
        '& .close_btn': {
            position: 'absolute',
            top: '7%',
            right: '19%',
            width: '30px',
            height: '30px',
            background: theme.palette.buttonColors.closeBtnObj.backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
            transition: '0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2)',
            },
            '& svg': {
                fill: theme.palette.buttonColors.closeBtnObj.iconColor,
            },
            [ theme.breakpoints.down('tablet') ]: {
                left: 'auto',
                right: 'auto',
                top: '2%',
                bottom: '0',
                zIndex: 1,
                width: 40,
                height: 40,
            },
        },
        '& .inline': {
            display: 'inline-flex',
            flexGrow: '1',
            [ theme.breakpoints.down('tablet') ]: {
                width: 'inherit',
                display: 'block',
            },
        },
    },
    alertDialogWrapper: {
        display: 'flex',
        width: '33vw',
        backgroundColor: theme.palette.successAlertColor,
        '&.error': {
            backgroundColor: theme.palette.errorAlertColor,
        },
        [ theme.breakpoints.down('tablet') ]: {
            flexDirection: 'column',
            margin: '0 auto',
            alignItems: 'center',
            borderRadius: '30px',
            width: '90%',
        },
        position: 'relative',
    },
    leftImageWrapper: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        alignItems: 'center',
        margin: '0.5rem',
        borderRadius: '10px',
        padding: '0.5rem',
        [ theme.breakpoints.down('tablet') ]: {
            margin: '2.25rem auto',
            width: 'fit-content',
            justifyContent: 'center',
        },
    },
    contentWrapper: {
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [ theme.breakpoints.down('tablet') ]: {
            textAlign: 'center',
            width: '70%',
            margin: '0 auto',
        },
    },
    closeWrapper: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginRight: '0.5rem',
        [ theme.breakpoints.down('tablet') ]: {
            visibility: 'hidden',
        },
    },
    colorWrapper: {
        color: theme.palette.white,
        '&.success': {
            color: theme.palette.successAlertColor,
        },
        '&.error': {
            color: theme.palette.errorAlertColor,
        },
    },
    mobileHeaderWrapper: {
        fontSize: '1rem !important',
        fontWeight: '600 !important',
        [ theme.breakpoints.down('tablet') ]: {
            fontSize: '1.75rem !important',
            paddingBottom: '1rem',
        },
    },
    mobileDescriptionWrapper: {
        fontSize: '0.7rem !important',
        fontWeight: '600 !important',
        [ theme.breakpoints.down('tablet') ]: {
            fontSize: '1rem !important',
        },
    },
}));

export default styles;
