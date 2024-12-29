const styles = ((theme) => ({
    footerTextfieldBlock: {
        margin: '1rem 0 1.5rem',
    },
    socialIcons: {
        fill: theme.palette.footerColors.footerTxtColor,
    },
    socialMediaIcons: {
        display: 'flex',
        gap: '20px',
        margin: '12px 0',
    },
    socialMediaBlock: {
        [ theme.breakpoints.down('920') ]: {
            maxWidth: '100%',
            flexBasis: '100%',
            display: 'flex',
            gap: '30px',
            marginTop: '30px',
        },
    },
    subscriberCaption: {
        '& p': {
            margin: '0',
        },
    },
}));

export default styles;
