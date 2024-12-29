const styles = ((theme) => ({
    footerLogoBlockText: {
        maxWidth: '345px',
        marginTop: '20px',
        [ theme.breakpoints.down('1450') ]: {
            maxWidth: '305px',
        },
        [ theme.breakpoints.down('1110') ]: {
            maxWidth: '225px',
        },
        [ theme.breakpoints.down('920') ]: {
            maxWidth: '360px',
        },
        [ theme.breakpoints.down('800') ]: {
            maxWidth: '310px',
        },
    },
    footerLogoContainer: {
        width: '100%',
        maxWidth: '224px',
        height: '100%',
        maxHeight: '20%',
        cursor: 'pointer',
        [ theme.breakpoints.down('1110') ]: {
            maxWidth: '200px',
            maxHeight: '25%',
        },
    },
    logoBlock: {
        [ theme.breakpoints.down('920') ]: {
            maxWidth: '50%',
            flexBasis: '50%',
        },
    },
}));

export default styles;
