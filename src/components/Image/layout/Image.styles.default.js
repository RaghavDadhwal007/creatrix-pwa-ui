const styles = (() => ({
    image_container: {
        width: '100%',
        height: '100%',
        position: 'relative',

        '& > div': {
            position: 'unset !important',
        },

        '& .image': {
            objectFit: 'contain',
            width: '100% !important',
            position: 'relative !important',
            height: 'unset !important',
        },
    },
}));

export default styles;
