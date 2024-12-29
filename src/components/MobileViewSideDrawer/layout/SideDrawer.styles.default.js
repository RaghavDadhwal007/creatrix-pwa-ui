const styles = ((theme) => ({
    listItems: {
        flexGrow: 1,
        '&.MuiListItem-root': {
            display: 'block',
        },
        '& .link2': {
            fontSize: '1rem',
        },
    },
    drawerSlide: {
        '&.MuiList-root': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '0',
        },
    },
    close_btn: {
        position: 'absolute',
        top: '2%',
        right: '10%',
        width: '35px',
        height: '35px',
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
            fontSize: '26px',
        },
    },
    drawerbtn: {
        '&.MuiButtonBase-root': {
            fontSize: '1.3rem !important',
            marginTop: '23px',
            minWidth: '217px !important',
            fontWeight: '700',
        },
    },
    slideItems: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        width: '95%',
        margin: '1rem auto',
    },
    slideHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.secondaryColor,
        minHeight: '10vh',
    },
    slideRightHeader: {
        display: 'flex',
        alignItems: 'center',
        flexBasis: '30%',
        justifyContent: 'space-evenly',
    },
    imageWrapper: {
        padding: '0 2rem',
    },
}));

export default styles;
