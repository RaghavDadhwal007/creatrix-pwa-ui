const styles = ((theme) => ({
    customSearchBarStyles: {
        background: 'rgba(255, 255, 255, 0.5)',
        '& fieldset': {
            border: 'none',
        },
        [ theme.breakpoints.down('laptop') ]: {
            height: '5vh',
        },
        [ theme.breakpoints.up('tablet') ]: {
            fontSize: '.7rem',
        },
        [ theme.breakpoints.up('md') ]: {
            fontSize: '.8rem',
        },
        [ theme.breakpoints.down('tablet') ]: {
            height: 'auto',
        },
        [ theme.breakpoints.down('sm') ]: {
            height: 45,
            fontSize: 14,
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            fontSize: 12,
        },
    },
    iconButtonStyle: {
        '& svg': {
            width: 30,
            height: 30,
            fill: theme.palette.black,
            [ theme.breakpoints.down('laptop') ]: {
                width: 26,
                height: 26,
            },
        },
    },
}));

export default styles;
