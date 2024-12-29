const styles = ((theme) => ({
    footerLogoContainer: {
        width: '100%',
        maxWidth: '132px',
        height: '100%',
        maxHeight: '72%',
        cursor: 'pointer',
    },
    logoBlock: {
        paddingBottom: '3.5rem',
        [ theme.breakpoints.down('500') ]: {
            paddingBottom: '5rem',
        },
        [ theme.breakpoints.down('360') ]: {
            paddingBottom: '6rem',
        },
    },

}));

export default styles;
