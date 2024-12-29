const styles = ((theme) => ({
    footerCopyRightTxt: {
        backgroundColor: theme.palette.footerColors.footerBottomBgColor,
        padding: '20px 0',
        textAlign: 'center',
    },

    footerBottomCaption: {
        '& p': {
            margin: '0',
        },
    },
}));

export default styles;
