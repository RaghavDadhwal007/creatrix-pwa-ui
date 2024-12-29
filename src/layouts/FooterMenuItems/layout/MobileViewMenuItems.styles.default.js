const styles = ((theme) => ({
    accordionContainerMain: {
        marginBottom: '8px',
    },
    accordionContainer: {
        backgroundColor: theme.palette.cardColors.bgColor || '#000',
        borderBottom: `1px solid ${ theme.palette.borderBottomColor }`,
        color: theme.palette.white,
        '& svg': {
            color: theme.palette.white,
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '0',
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
    menuItemsBlock: {
        width: '100%',
    },
}));

export default styles;
