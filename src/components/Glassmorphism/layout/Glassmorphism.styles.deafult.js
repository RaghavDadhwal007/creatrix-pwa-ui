const styles = ((theme) => ({
    boxBlock: {
        background: 'linear-gradient(113.28deg, rgb(255, 255, 255, 0.4) -13.95%, rgb(255, 255, 255, 0.1) 86.85%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0px 4px 24px -2px rgba(0, 0, 0, 0.2)',
        [ theme.breakpoints.down('tablet') ]: {
            backdropFilter: 'unset',
            background: 'unset',
        },
    },

}));

export default styles;
