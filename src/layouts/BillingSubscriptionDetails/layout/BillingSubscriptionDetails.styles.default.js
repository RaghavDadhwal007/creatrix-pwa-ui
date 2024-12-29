const styles = ((theme) => ({
    buttonsWrappper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .underline': {
            fontWeight: '500',
        },
        [ theme.breakpoints.down('md') ]: {
            flexDirection: 'column',
        },
    },
    buttonWrappper: {
        display: 'flex',
        [ theme.breakpoints.down('md') ]: {
            flexDirection: 'column',
            margin: '1rem 0',
            width: '50vw',
        },
        [ theme.breakpoints.down('sm') ]: {
            width: '70vw',
        },
        '& .primary-btn': {
            fontWeight: '700',
            margin: '0 0.5rem',
            [ theme.breakpoints.down('md') ]: {
                minWidth: 'unset !important',
            },
            [ theme.breakpoints.down('md') ]: {
                margin: '1rem 0',
            },
        },
        '& .border-btns': {
            padding: '0.75rem 3rem',
            margin: '0 0.5rem',
            backgroundColor: 'transparent',
            border: `1px solid ${ theme.palette.white }`,
            color: theme.palette.white,
            marginRight: '25px',
            [ theme.breakpoints.down('laptop') ]: {
                padding: '0.5rem 1rem',
            },
            [ theme.breakpoints.down('md') ]: {
                minWidth: 'unset',
                margin: 0,
            },
        },
    },
    textWrappper: {
        textAlign: 'center',
    },
    optionsWrapper: {
        alignContent: 'center',
        margin: '1rem 0 2.5rem 0',
        maxHeight: '20rem',
    },
    optionWrapper: {
        color: theme.palette.white,
        marginRight: '0.7rem',
    },
    flexWrappper: {
        display: 'flex',
        margin: '1rem 0',
        '& .value': {
            fontWeight: '500',
            paddingLeft: '0.25rem',
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.75rem',
            },
        },
        '& .body1': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.75rem',
            },
        },
    },
    tableContainerWrapper: {
        margin: '2rem 0',
    },
    tableHeadWrapper: {
        backgroundColor: theme.palette.black,
        height: '5vh',
    },
    tableCellWrapper: {
        color: theme.palette.white,
        fontWeight: 600,
        fontSize: '1rem',
        border: 'unset',
    },
    tableBodyCellWrapper: {
        color: theme.palette.white,
        fontWeight: 400,
        fontSize: '1rem',
        border: 'unset',
    },
    backgroundWrapper: {
        backgroundColor: theme.palette.cardShadow,
        borderRadius: '0',
        '& .cardLabel': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.75rem',
            },
        },
        '& .cardValue': {
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.75rem',
            },
        },
    },
    spaceWrapper: {
        marginBottom: '0.5rem',
    },

    // No plan Layout

    accountDetails: {
        color: theme.palette.white,
        '&>div': {
            padding: '10px 0px',
        },
    },
    noPlansLayout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '4em 0',
    },
    description: {
        color: theme.palette.white,
        textAlign: 'center',
        padding: '1rem 0',
        width: '50%',
    },
    shortDescription: {
        fontSize: 30,
        fontWeight: 600,
        padding: '1rem 0',
    },
    longDescription: {
        fontWeight: 300,
        fontSize: 15,
        paddingBottom: '2rem',
    },
}));

export default styles;
