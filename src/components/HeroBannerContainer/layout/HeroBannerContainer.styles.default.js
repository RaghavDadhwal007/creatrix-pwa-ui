import assets from 'assets';

const styles = ((theme) => {
    const { images: { backgroundHeroBanner } } = assets;
    return ({
        heroBannerWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '10vh',
            marginTop: '-80px',
            '&.image': {
                backgroundImage: (props) => `url(${ (props?.styles?.hero_images?.[ 0 ]?.file?.content_type?.includes('image') && props?.styles?.hero_images?.[ 0 ]?.file?.url) || backgroundHeroBanner })`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                [ theme.breakpoints.down('tablet') ]: {
                    backgroundImage: (props) => `url(${ (props?.styles?.hero_images?.[ 0 ]?.mobile_media?.content_type?.includes('image') && props?.styles?.hero_images?.[ 0 ]?.file?.url) || backgroundHeroBanner })`,
                },
            },
        },
        heroBanner: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexGrow: '1',
            gap: '1.5rem',
        },
    });
});

export default styles;
