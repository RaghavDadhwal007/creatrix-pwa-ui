const styles = ((theme) => ({
    accordionContainerMain: {
        margin: '12px 0px',
    },
    accordionContainer: {
        borderRadius: '8px',
        backgroundColor: theme.palette.cardColors.cardIIIBackgroundColor || '#262626',
        color: theme.palette.white,
        '& svg': {
            color: theme.palette.white,
        },
    },
    blockWrapper: {
        paddingBottom: '10px',
    },
    blockHeading: {
        borderRight: `1px solid ${ theme.palette.white }`,
        color: theme.palette.white,
        fontSize: '1.6em',
        padding: '6px 32px 6px 0px',
        fontWeight: '600',
    },
}));

export default styles;
