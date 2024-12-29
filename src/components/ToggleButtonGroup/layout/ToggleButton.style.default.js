const styles = ((theme) => ({
    borderRadius: theme.palette.radius,
    toggleGroupStyle: {
        '& .MuiToggleButton-root': {
            padding: '17px 20px',
            fontSize: '15px',
            fontWeight: '500',
            backgroundColor: theme.palette.textFieldInputBackgroundColor,
            border: '0px',
            color: theme.primaryColor,
            borderRadius: '5px',

        },
        '& .Mui-error.MuiOutlinedInput-root': {
            color: theme.palette.helperTextWarningColor,
            border: '1px solid',
            borderColor: (props) => props?.error
                && theme.palette.helperTextWarningColor,
        },
        '& ..Mui-selected': {
            backgroundColor: theme.palette.textFieldInputBackgroundColor,
            borderRadius: theme.palette.radius,
            '& fieldset': {
                border: 'none',
            },
        },
    },
    floatingLabelFocusStyle: {
        '& .focused': {
            color: theme.palette.redColor,
        },
    },
}));

export default styles;
