const styles = ((theme) => ({
    checkboxWrapper: {
        '& .MuiFormControlLabel-root': {
            margin: '0rem',
        },
        '& .MuiButtonBase-root.MuiCheckbox-root': {
            color: 'white',
            background: 'white',
            padding: 0,
            width: '22px',
            height: '22px',
            borderRadius: '4px',
            marginRight: '8px',
        },
        '& .MuiButtonBase-root.MuiCheckbox-root.Mui-checked': {
            color: theme.palette.cardColors.rememberTxtColor,
        },
    },
}));

export default styles;
