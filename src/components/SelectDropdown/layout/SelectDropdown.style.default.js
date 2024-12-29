const styles = ((theme) => ({
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
