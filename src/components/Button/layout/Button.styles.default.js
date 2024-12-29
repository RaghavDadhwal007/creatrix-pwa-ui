const styles = ((theme) => ({
    buttonStyles: {
        '&.MuiButtonBase-root': {
            textTransform: 'capitalize',
            minWidth: '215px',
            minHeight: '55px',
            fontSize: '16px',
            borderRadius: '10px',

            '&.primary-btn': {
                color: theme.palette.buttonColors.btnTxtColor,
                backgroundColor: theme.palette.primaryColor,
                padding: '0 2rem',
                [ theme.breakpoints.down('768') ]: {
                    flexGrow: '1',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    minWidth: '160px',
                    fontSize: '0.8rem',
                },
                '&:disabled': {
                    opacity: '0.4',
                },
                '&:hover': {
                    opacity: '0.9',
                },
            },
            '&.primary-btn1': {
                color: theme.palette.buttonColors.btnTxtColor,
                backgroundColor: theme.palette.primaryColor,
                padding: '0 2rem',
                [ theme.breakpoints.down('sm') ]: {
                    flexGrow: '1',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    minWidth: '160px',
                    fontSize: '0.8rem',
                },
                [ theme.breakpoints.down('tablet') ]: {
                    minWidth: '100%',
                    fontSize: '1rem',
                },
                '&:disabled': {
                    opacity: '0.4',
                },
            },
            '&.secondary-btn': {
                '& p': {
                    color: theme.palette.buttonColors.btnSecondaryTextColor,
                },
                border: `1px solid ${ theme.palette.iconColors.buttonbgColor }`,
                backgroundColor: theme.palette.buttonColors.btnTxtColor,
                padding: '18px 32px 18px 24px',
                textTransform: 'capitalize',
                borderRadius: '8px',
                fontSize: '16px',
                gap: '12px',
                width: '100%',
                minWidth: '100%',
                minHeight: '100%',
                [ theme.breakpoints.down('1210') ]: {
                    fontSize: '14px',
                    padding: '15px 20px',
                    gap: '10px',
                },
                [ theme.breakpoints.down('1024') ]: {
                    fontSize: '13px',
                    gap: '0px',
                    padding: '10px 20px',
                },
                [ theme.breakpoints.down('920') ]: {
                    fontSize: '13px',
                    padding: '7px 16px',
                    gap: '13px',
                },
                [ theme.breakpoints.down('md') ]: {
                    gap: '5px',
                    padding: '12px 18px',
                    fontSize: '12px',
                },
            },
            '&.icon-btn': {
                backgroundColor: theme.palette.darkGrey,
                textTransform: 'capitalize',
                borderRadius: '8px',
                padding: '5px 15px',
                minHeight: '40px',
                minWidth: '162px',
                color: theme.palette.white,
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '0.7rem',
                    minWidth: '112px',
                    padding: '0px 8px',
                },
                [ theme.breakpoints.down('tablet') ]: {
                    minWidth: '140px',
                },
                [ theme.breakpoints.down('375') ]: {
                    fontSize: '0.6rem',
                    padding: '5px 10px',
                },
            },
            '&.tertiary-btn': {
                color: theme.palette.buttonColors.btnTxtColor,
                backgroundColor: theme.palette.primaryColor,
                borderRadius: '5px',
                minHeight: '3rem',
                minWidth: '10rem',
                [ theme.breakpoints.down('md') ]: {
                    minHeight: '2rem',
                    minWidth: '8rem',
                    fontSize: '0.7rem',
                },
                '&.setting': {
                    minHeight: '2rem',
                    minWidth: '8rem',
                    fontSize: '0.7rem',
                    [ theme.breakpoints.down('768') ]: {
                        minHeight: '1.9rem',
                        minWidth: '6rem',
                        fontSize: '0.6rem',
                    },
                },
            },
            '&.transparent-header-btn': {
                color: theme.palette.buttonColors.btnTxtColor,
                borderRadius: '5px',
                border: `1px solid ${ theme.palette.white }`,
                minHeight: '3rem',
                minWidth: '10rem',
                [ theme.breakpoints.down('md') ]: {
                    minHeight: '2rem',
                    minWidth: '8rem',
                    fontSize: '0.7rem',
                },
                '&.setting': {
                    minHeight: '2rem',
                    minWidth: '8rem',
                    fontSize: '0.7rem',
                    [ theme.breakpoints.down('md') ]: {
                        minHeight: '1.8rem',
                        minWidth: '6rem',
                        fontSize: '0.6rem',
                    },
                },
            },
            '&.green-header-btn': {
                color: theme.palette.buttonColors.btnTxtColor,
                backgroundColor: theme.palette.secondaryColor,
                borderRadius: '5px',
                minHeight: '3rem',
                minWidth: '10rem',
                margin: '0 15px',
                [ theme.breakpoints.down('md') ]: {
                    minHeight: '2rem',
                    minWidth: '8rem',
                    fontSize: '0.7rem',
                },
            },
            '&.tertiary-btn-1': {
                color: theme.palette.buttonColors.btnTxtColor,
                backgroundColor: theme.palette.primaryColor,
                borderRadius: '10px',
                minWidth: '180px',
                minHeight: '55px',
                fontSize: '18px',
                [ theme.breakpoints.down('md') ]: {
                    minWidth: '165px',
                    minHeight: '55px',
                    fontSize: '15px',
                },
            },
            '&.transparent-btn': {
                backgroundColor: theme.palette.buttonColors.transparentButton,
                color: theme.palette.cardColors.planCardBodyColor,
                fontSize: '18px',
                fontWeight: 700,
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '0.9rem',
                },
            },
            '&.iconBtn': {
                backgroundColor: theme.palette.buttonColors.btnBgColor,
                minWidth: '100%',
                minHeight: '100%',
                padding: '20px 35px',
                borderRadius: '6px',
            },
            '&.dark-btn': {
                backgroundColor: theme.palette.buttonColors.darkColor,
                width: '80%',
                minHeight: '100px',
                fontSize: '18px',
                fontWeight: 600,
                margin: '2rem auto',
                color: theme.palette.white,
                [ theme.breakpoints.up('xl') ]: {
                    fontSize: '1rem',
                    padding: '0px 50px 0px 50px',
                    minHeight: '60px',
                },
                [ theme.breakpoints.down('xl') ]: {
                    fontSize: '1rem',
                    padding: '0px 10px 0px 10px',
                    minHeight: '60px',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '0.9rem',
                    minWidth: '208px',
                },
            },
            '&.dark-btn2': {
                backgroundColor: theme.palette.darkGrey,
                color: theme.palette.white,
                minWidth: '120px',
                padding: '0 18px',
                [ theme.breakpoints.down('laptop') ]: {
                    minWidth: '74px',
                    padding: '0px 12px',
                },
            },
            '&.text-btn': {
                backgroundColor: 'transparent',
                minWidth: '10px',
                minHeight: '10px',
                paddingLeft: '15px',
                color: theme.palette.white,
            },
            '&.text-btn2': {
                backgroundColor: 'transparent',
                color: theme.palette.white,
                fontSize: '1.7rem',
                fontWeight: '600',
                [ theme.breakpoints.down('laptoplg') ]: {
                    fontSize: '1.2rem',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '1.1rem',
                },
                [ theme.breakpoints.down('tablet') ]: {
                    fontSize: '0.8rem',
                    minWidth: '164px',
                },
                [ theme.breakpoints.down('mobilelg') ]: {
                    fontSize: '0.6rem',
                    minWidth: '118px',
                },
            },
            '&.text-btn2-selected': {
                backgroundColor: 'transparent',
                color: theme.palette.pink,
                fontSize: '1.7rem',
                fontWeight: '600',
                textDecoration: 'underline',
                [ theme.breakpoints.down('laptoplg') ]: {
                    fontSize: '1.2rem',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '1.1rem',
                },
                [ theme.breakpoints.down('tablet') ]: {
                    fontSize: '0.8rem',
                    minWidth: '164px',

                },
                [ theme.breakpoints.down('mobilelg') ]: {
                    fontSize: '0.6rem',
                    minWidth: '118px',
                },
            },
            '&.border-btn': {
                backgroundColor: 'transparent',
                border: `1px solid ${ theme.palette.white }`,
                color: theme.palette.white,
                minWidth: '170px',
                minHeight: '50px',
                padding: '1rem 3rem',
                [ theme.breakpoints.down('laptoplg') ]: {
                    minWidth: '100px',
                    padding: '0rem 1rem',

                },
            },
            '&.border-btn:hover': {
                backgroundColor: theme.palette.pink,
                border: `1px solid ${ theme.palette.pink }`,
            },
        },
        '&.MuiButtonBase-root:hover': {
            backgroundColor: theme.palette.buttonColors.btnBgColor,
        },
        '&.MuiButtonBase-root:disabled': {
            opacity: '0.4',
        },
        '&.clearFilterBtn': {
            backgroundColor: theme.palette.black,
            color: theme.palette.secondaryColor,
            fontSize: '1.6rem',
            fontWeight: '600',
            minWidth: '0',
            minHeight: '0',
            padding: '0',
            '&.MuiButtonBase-root:hover': {
                backgroundColor: theme.palette.black,
            },
            [ theme.breakpoints.down('850') ]: {
                fontSize: '1.2rem',
            },
        },

    },
}));

export default styles;
