const styles = ((theme) => ({
    innnerAppBlackBackgroundWrapper: {
        background: theme?.palette?.cardColors?.bgColor,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 'inherit',
    },
    innnerAppImageBackgroundWrapper: {
        width: '100%',
        overflowY: 'scroll',
        height: 'inherit',
        overflowX: 'hidden',
    },
    innerWrapper: {
        margin: '0 auto',
        marginTop: '80px',
        minHeight: '100vh',
    },
})
);

export default styles;
