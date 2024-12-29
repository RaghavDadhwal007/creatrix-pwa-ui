const styles = ((theme) => ({
    flexBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexBasis: '40%',
        gap: '2rem',
    },
    flxBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: 'white',
        padding: '1rem 0',
        margin: '0 1rem',
    },
    selectedLink: {
        borderBottom: '2px solid white',
    },
    linkWrapper: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '2em',
        fontWeight: '1rem',
    },
    imageWrapper: {
        minWidth: 50,
        maxWidth: 50,
        height: 50,
        borderRadius: 50,
        [ theme.breakpoints.down('md') ]: {
            minWidth: 40,
            maxWidth: 40,
            height: 40,
        },
        '& span': {
            borderRadius: '50px',
        },
    },
    dropdownArrowIcon: {
        marginLeft: '18px',
        [ theme.breakpoints.down('md') ]: {
            margin: '5px 12px',
        },
    },
}));

export default styles;
