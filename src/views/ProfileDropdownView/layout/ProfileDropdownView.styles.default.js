const styles = ((theme) => ({
    menuList: {
        display: 'flex',
        padding: '7px 0',
        [ theme.breakpoints.down('md') ]: {
            padding: '4px 0',
        },
        '& .MuiTypography-root': {
            color: theme.palette.black,
            fontSize: 14,
            [ theme.breakpoints.down('md') ]: {
                fontSize: 12,
            },
        },
    },
    imageWrapper: {
        minWidth: 20,
        maxWidth: 20,
        marginRight: 10,
        borderRadius: 50,
    },
    profileWrapper: {
        borderBottom: `1px solid ${ theme.palette.cardColors.txtColor }`,
        padding: '2rem 0',
        width: '95%',
        cursor: 'pointer',
    },
    mobileImageWrapper: {
        position: 'relative',
        height: '60px',
        width: '60px',
        marginRight: '0.5rem',
    },
    profileName: {
        '&.MuiTypography-root': {
            color: theme.palette.black,
            fontSize: '1.2rem !important',
            fontWeight: 800,
        },
    },
    email: {
        '&.MuiTypography-root': {
            color: theme.palette.cardColors.txtColor,
            fontSize: '1rem !important',
            fontWeight: 600,
        },
    },
    remainingDownloads: {
        '&.MuiTypography-root': {
            color: theme.palette.cardColors.txtColor,
            fontSize: '0.75rem',
            fontWeight: 400,
        },
    },
    profileDropdownImgWrapper: {
        display: 'flex',
        paddingBottom: '10px',
    },
    profileDropdownUserEmail: {
        '&.MuiTypography-root': {
            fontSize: '13px',
            fontWeight: 600,
            color: theme.palette.black,
            paddingLeft: '5px',
        },
    },
    profileDropdownUserDownloads: {
        '&.MuiTypography-root': {
            color: theme.palette.black,
            paddingLeft: '5px',
            fontSize: '9px',
        },
    },
    dropDownImageWrapper: {
        minWidth: 70,
        maxWidth: 70,
        height: 70,
        padding: '4px',
        '& img': {
            borderRadius: '50%',
        },
        '& >div': {
            borderRadius: '50%',
            border: `solid ${ theme.palette.black } 1px`,
        },
        [ theme.breakpoints.down('md') ]: {
            minWidth: 50,
            maxWidth: 50,
            height: 50,
        },
    },
    dropdownProfileCardWrapper: {
        alignSelf: 'center',
    },
}));

export default styles;
