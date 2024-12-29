const styles = ((theme) => ({
    whyCreatigoblockWrapper: {
        position: 'relative',
    },
    svgIcon: {
        width: '30px',
    },
    whyCreatigoBlock: {
        position: 'absolute',
        right: 0,
        width: '50%',
        paddingLeft: '20px',
        top: '29%',
        [ theme.breakpoints.down('laptop') ]: {
            position: 'relative',
            width: '100%',
            padding: '0',
            marginTop: '20px',
        },
        '& .MuiTypography-root': {
            fontSize: '0.85rem',
        },
    },
}));

export default styles;
