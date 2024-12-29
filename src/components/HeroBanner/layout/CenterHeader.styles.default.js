const styles = ((theme) => ({
    imageWrapper: {
        height: '50px',
        width: '33%',
        marginLeft: '1rem',
    },
    btnsWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        [ theme.breakpoints.down('mobilelg') ]: {
            flexDirection: 'column',
            width: '90%',
        },
        '& .MuiButtonBase-root.tertiary-btn': {
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: '3rem',
                minWidth: '10rem',
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('sm') ]: {
                minHeight: 40,
                minWidth: 110,
                fontSize: 14,
            },
            [ theme.breakpoints.down('mobilelg') ]: {
                minHeight: 45,
                minWidth: '100%',
                fontSize: 16,
            },
        },
        '& .MuiButtonBase-root.transparent-header-btn': {
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: '3rem',
                minWidth: '10rem',
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('sm') ]: {
                minHeight: 40,
                minWidth: 110,
                fontSize: 14,
            },
            [ theme.breakpoints.down('mobilelg') ]: {
                minHeight: 45,
                minWidth: '100%',
                fontSize: 16,
            },
        },
        '& .MuiButtonBase-root.green-header-btn': {
            [ theme.breakpoints.down('tablet') ]: {
                minHeight: '3rem',
                minWidth: '10rem',
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('sm') ]: {
                minHeight: 40,
                minWidth: 110,
                fontSize: 14,
            },
            [ theme.breakpoints.down('mobilelg') ]: {
                minHeight: 45,
                minWidth: '100%',
                fontSize: 16,
                margin: '15px 0',
            },
        },
    },
    searchWrapper: {
        display: 'flex',
        width: '70%',
        [ theme.breakpoints.down('tablet') ]: {
            width: '85%',
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            width: '90%',
        },
    },
    menuItems: {
        [ theme.breakpoints.down('sm') ]: {
            fontSize: 14,
        },
    },
    searchBarWrapper: {
        borderRadius: '0 12px 12px 0',
        flexGrow: 9,
        color: theme.palette.white,
    },
    searchTypeWrapper: {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '12px 0 0 12px',
        marginRight: '1px',
        color: theme.palette.white,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& svg': {
            fill: theme.palette.white,
        },
        [ theme.breakpoints.up('tablet') ]: {
            fontSize: '.7rem',
        },
        [ theme.breakpoints.up('md') ]: {
            fontSize: '.8rem',
        },
        [ theme.breakpoints.down('laptop') ]: {
            height: '5vh',
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
    containerWrapper: {
        flexGrow: 1,
    },
    caption: {
        zIndex: 1,
        textAlign: 'center',
        width: '60%',
        fontSize: (props) => `${ props.styles.sub_heading_font_size } rem`,
    },
    fadeOutWrapper: {
    },
    animatedItem: {
        animation: '$myEffect 3000ms infinite',
        width: '75%',
        textAlign: 'center',
    },
    '@keyframes myEffect': {
        '0%': {
            opacity: 0,
        },
        '50%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        },
    },
}));

export default styles;
