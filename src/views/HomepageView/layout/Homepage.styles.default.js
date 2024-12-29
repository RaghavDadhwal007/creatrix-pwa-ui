import assets from 'assets';

const styles = ((theme) => {
    const { images: { backgroundMaskBanner, backgroundHeroBanner } } = assets;
    return ({
        mainSliderContainer: {
            width: '100%',
            padding: '1em 0em 2em 0em',
            [ theme.breakpoints.down('tablet') ]: {
                padding: 0,
            },
        },
        heroBannerWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '10vh',
            marginTop: '-80px',
            '&.image': {
                height: '70vh',
                backgroundColor: '',
                backgroundImage: `url(${ backgroundHeroBanner })`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
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
        homepage_view_wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '20px',
        },
        innerViewWrapper: {
            backgroundColor: theme.palette.white,
            borderRadius: '10px',
            minHeight: '14vh',
            margin: '0 auto',
            display: 'flex',
            padding: '10px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        fullWidth: {
            width: '100%',
            background: theme.palette.footerColors.footerBgColor,
            color: theme.palette.white,
        },
        btnBlockWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '2em',
        },
        contactUsWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20rem',
            width: '100%',
            backgroundImage: `url(${ backgroundMaskBanner })`,
            backgroundRepeat: 'no-repeat',
        },
        contactInnerUsWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20rem',
            width: '50%',
            textAlign: 'center',
            marginBottom: '3rem',

        },
        contactHeading: {
            marginBottom: '2rem',
        },
        headingWrapper: {
            color: theme.palette.white,

        },
        blockWrapper: {
            width: 'fit-content',
            paddingTop: '3rem',
            [ theme.breakpoints.down('tablet') ]: {
                padding: '0',
            },
        },
        blockHeading: {
            borderRight: `1px solid ${ theme.palette.white }`,
            paddingRight: '2rem',
        },
        firstBlockWrapper: {
            margin: '0 auto',
            maxWidth: `${ theme.palette.applicationMinWidth }`,
            padding: '5rem 2rem 0rem 2rem',
            [ theme.breakpoints.down('tablet') ]: {
                padding: '0',
                maxWidth: '90%',
                width: '100%',
            },
        },
        commonBlockWrapper: {
            padding: '3rem 2rem 0rem 2rem',
            marginBottom: '3rem',
            margin: '0 auto',
            maxWidth: `${ theme.palette.applicationMinWidth }`,
        },
        SubscriptionBlockWrapper: {
            margin: '0em auto 3em auto',
            maxWidth: `${ theme.palette.applicationMinWidth }`,
            width: '100%',
            [ theme.breakpoints.down('tablet') ]: {
                maxWidth: '90%',
                margin: '0 auto',
            },
        },
    });
});

export default styles;
