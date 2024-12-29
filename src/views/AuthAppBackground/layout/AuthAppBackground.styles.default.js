import assets from 'assets';

const styles = ((theme) =>  {
    const { images: { authAppBackgroundImage } } = assets;

    return ({
        authBackgroundWrapper: {
            backgroundImage: `url(${ authAppBackgroundImage || '' })`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            overflowY: 'scroll',
            overflowX: 'hidden',
        },
        formWrapper: {
            width: '100%',
            height: 'auto',
            padding: '0px 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [ theme.breakpoints.up('sm') ]: {
                padding: '0px 10px',
            },
            [ theme.breakpoints.up('md') ]: {
                padding: '0px 2rem',
            },
        },
        cardWrapper: {
            flex: 1,
            maxWidth: '1240px',
            margin: '1rem',
            marginBottom: '2rem',
        },
        cardview_topheader: {
            padding: `${ theme.spacing(2) } 0px`,
            textAlign: 'center',
        },
        imageContainer: {
            backgroundColor: theme.palette.cardColors.imageContainerColor,
            borderRadius: '20px ',
        },
        auth_image_wrapper: {
            height: '100%',
            width: '100%',
            '& .image': {
                objectFit: 'cover',
            },
        },
        cardview_container: {
            width: '100%',
            margin: '0 auto',
            padding: '2rem 2rem 1rem 2rem',
            [ theme.breakpoints.up('sm') ]: {
                paddingTop: '1rem',
            },
            [ theme.breakpoints.up('md') ]: {
                paddingTop: '2rem',
            },
        },
    });
});

export default styles;
