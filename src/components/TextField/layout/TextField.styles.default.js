const styles = ((theme) => ({
    borderRadius: theme.palette.radius,
    textFieldDefault: {
        '& .MuiInputBase-input': {
            padding: '14px 20px',
            fontSize: '13px',
            fontWeight: '500',
            color: theme.palette.textColors.textFieldColor,
            '&:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 100px ${ theme.palette.cardColors.inputColor } inset`,
            },
        },
        '& .Mui-error.MuiOutlinedInput-root': {
            color: theme.palette.helperTextWarningColor,
            borderColor: (props) => props?.error
                && theme.palette.helperTextWarningColor,
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.cardColors.inputColor,
            border: '0',
            outline: 'none',
            borderRadius: '10px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0',
            outline: 'none',
        },
        '&.footerTextfield': {
            '& .MuiInputBase-input': {
                padding: '14px 20px',
                fontSize: '16px',
                fontWeight: '500',
                color: theme.palette.buttonColors.btnTxtColor,
                '&:-webkit-autofill': {
                    WebkitBoxShadow: `0 0 0 100px ${ theme.palette.cardColors.inputColor } inset`,
                },
            },
            '& .Mui-error.MuiOutlinedInput-root': {
                color: theme.palette.helperTextWarningColor,
                borderColor: (props) => props?.error
                    && theme.palette.helperTextWarningColor,
            },
            '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.footerColors.footerTextFieldColor,
                border: '0',
                outline: 'none',
                borderRadius: '6px',
                padding: '0',

            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0',
                outline: 'none',
            },
        },
        '&.darkTextField2': {

            '& .MuiInputBase-input': {
                padding: '14px 20px',
                fontSize: '1rem',
                fontWeight: '500',
                color: theme.palette.buttonColors.btnTxtColor,
                '&:-webkit-autofill': {
                    WebkitBoxShadow: `0 0 0 100px ${ theme.palette.cardColors.inputColor } inset`,
                },
            },
            '& .Mui-error.MuiOutlinedInput-root': {
                color: theme.palette.helperTextWarningColor,
                borderColor: (props) => props?.error
                    && theme.palette.helperTextWarningColor,
            },
            '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.darkGrey,
                border: '0',
                outline: 'none',
                borderRadius: '6px',
                padding: '0',

            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0',
                outline: 'none',
            },

        },
        '&.textBox': {
            '& .MuiOutlinedInput-root': {
                padding: '0rem 0rem 5rem !important',

            },
        },
    },
    textFieldDark: {
        '& .MuiInputBase-input': {
            padding: '17px 20px',
            fontSize: '15px',
            fontWeight: '700',
            borderRadius: '10px',
            color: theme.palette.typographyColors.headingColor,
        },
        '& .Mui-error.MuiOutlinedInput-root': {
            color: theme.palette.helperTextWarningColor,
            border: '1px solid',
            borderColor: (props) => props?.error
                && theme.palette.helperTextWarningColor,
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.cardColors.bgColor,
            borderRadius: '10px',
            '& fieldset': {
                border: 'none',
            },
        },
        '& .Mui-disabled': {
            color: theme.palette.fadeWhiteColor,
            '-webkit-text-fill-color': theme.palette.fadeWhiteColor,
        },
        '&.textBox': {
            '& .MuiInputBase-input': {
                padding: '17px 5px 5rem !important',
                [ theme.breakpoints.down('tablet') ]: {
                    padding: '10px 5px 50px !important',
                },

            },
        },

    },
    floatingLabelFocusStyle: {
        '& .focused': {
            color: 'red',
        },
    },
    labelWrapper: {
        margin: `${ theme.spacing(1) }`,
    },
    spaceWrapper: {
        margin: `0 ${ theme.spacing(1) }`,
    },
    formLabel: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '22px',
        color: `${ theme.palette.labelColor }`,

    },

    iconColorWrapper: {
        '&.MuiSvgIcon-root': {
            cursor: 'pointer',
            color: theme.palette.white,
        },
    },
    iconColorDefault: {
        '&.MuiSvgIcon-root': {
            cursor: 'pointer',
        },
    },

}));

export default styles;
