const styles = ((theme) => ({
    heading_text: {
        '&.heading': {
            fontWeight: '600',
            fontSize: '2rem',
            textAlign: 'center',
            color: theme.palette.white,
            paddingTop: '2rem',
            paddingBottom: '2rem',
        },
    },
    dialogBlock: {
        width: '100%',
        display: 'flex',
        minHeight: '70vh',
        alignItems: 'center',
        [ theme.breakpoints.up('xxl') ]: {
            minHeight: '40vh',
        },
        [ theme.breakpoints.up('3840') ]: {
            minHeight: '30vh',
        },
    },
    dialogWrapper: {
        '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'unset',
            maxWidth: '750px',
            minHeight: '750px',
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: 'auto',
                overflow: 'unset',
            },
            [ theme.breakpoints.down('800') ]: {
                maxWidth: '680px',
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
            zIndex: 1,
            boxShadow: '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
            transition: '0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2)',
            },
            '& svg': {
                fill: theme.palette.buttonColors.closeBtnObj.iconColor,
            },
            [ theme.breakpoints.down('tablet') ]: {
                left: '44%',
                zIndex: 1,
                top: '-3%',
                width: 40,
                height: 40,
            },
        },

        '& .dialog_inner_wrapper': {
            position: 'relative',
            // backgroundColor: (props) => ((props.primary) ? theme.palette.green : theme.palette.pink), // it is giving transparent color in development mode
            backgroundColor: theme.palette.green,
            borderRadius: '70%',
            maxWidth: '750px',
            minHeight: '750px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
            [ theme.breakpoints.down('800') ]: {
                minHeight: '680px',
            },
            [ theme.breakpoints.down('tablet') ]: {
                display: 'block',
                borderRadius: 30,
                paddingBottom: 15,
                minHeight: 'auto',
                overflow: 'auto',
                margin: '0 -22px',
            },
            '& ::-webkit-scrollbar': {
                width: '0px',
                height: '0px',
                borderRadius: '10px',
                background: 'transparent',
            },
            '& ::-webkit-scrollbar-thumb': {
                background: 'rgba(255,255,255, 0.2)',
            },
            '& ::-webkit-scrollbar-track': {
                background: 'rgba(255,255,255, 0)',
            },
        },
        '& .MuiFormLabel-root': {
            color: theme.palette.white,
            fontSize: 13,
            display: 'block',
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 18,
                marginBottom: 5,
            },
            [ theme.breakpoints.down('mobile') ]: {
                fontSize: 16,
            },
        },
        '& .MuiButton-root.primary-btn': {
            backgroundColor: theme.palette.greyDark,
            minWidth: 210,
            minHeight: 48,
            marginTop: 20,
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 16,
                minHeight: 55,
            },
        },
        '& .MuiInputBase-input': {
            padding: 10,
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 18,
                padding: '10px 14px',
            },
            [ theme.breakpoints.down('mobile') ]: {
                fontSize: 16,
            },
        },
        '& .MuiButton-root.secondary-btn': {
            width: '160px',
            backgroundColor: theme.palette.green,
            borderColor: theme.palette.white,
            padding: '7px 0',
            '& svg': {
                fill: theme.palette.white,
            },
            '& .MuiTypography-root': {
                color: theme.palette.white,
                fontSize: 10,
                [ theme.breakpoints.down('tablet') ]: {
                    fontSize: 14,
                },
            },
            [ theme.breakpoints.down('tablet') ]: {
                padding: '12px 14px',
            },
        },
        '& .MuiTypography-root': {
            color: theme.palette.white,
            fontSize: 13,
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: 16,
            },
            [ theme.breakpoints.down('mobile') ]: {
                fontSize: 12,
            },
        },
        '& .MuiTypography-root.heading': {
            fontSize: 24,
            [ theme.breakpoints.down('tablet') ]: {
                width: '90%',
                margin: '0 auto',
                textAlign: 'left',
                fontWeight: '600',
                fontSize: '2rem',
                color: theme.palette.white,
                paddingTop: '2rem',
                paddingBottom: '2rem',
            },
            [ theme.breakpoints.down('sm') ]: {
                fontSize: '1.6rem',
            },
            [ theme.breakpoints.down('mobile') ]: {
                fontSize: '1.3rem',
            },
        },
        '& .actionWrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 'unset !important',
        },
        '& .MuiDialogContent-root': {
            [ theme.breakpoints.down('sm') ]: {
                padding: 0,
            },
        },
        '& .MuiGrid-root.MuiGrid-container': {
            [ theme.breakpoints.down('tablet') ]: {
                display: 'block',
            },
        },
    },
}));

export default styles;
