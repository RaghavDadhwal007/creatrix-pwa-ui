const styles = ((theme) => ({
    cardContainer: {
        backgroundColor: theme.palette.cardColors.cardIIIBackgroundColor,
        borderRadius: '20px',
        border: `1px solid ${ theme.palette.cardColors.cardIIBorderColor }`,
        padding: `${ theme.spacing(7) } ${ theme.spacing(5) }`,
        maxWidth: '820px',
        [ theme.breakpoints.down('tablet') ]: {
            padding: `${ theme.spacing(4) } ${ theme.spacing(2) }`,
            borderRadius: '6px',
        },
    },
}));

export default styles;
