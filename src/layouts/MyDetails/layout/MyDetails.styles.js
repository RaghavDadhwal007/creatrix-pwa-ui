import assets from 'assets';

const styles = (theme) => {
    const { images: { authAppBackgroundImage } = {} } = assets || {};

    return ({
        root: {
            [ theme.breakpoints.down('tablet') ]: {
                margin: 'auto 1em',
            },
        },
        edit_profile: {
            margin: '1rem 0rem',
            color: theme.palette.commonActiveColor,
        },
        signinview_formsubmitbtnwrapper: {
            paddingTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        settingItem: {
            background: theme.palette.secondaryBackgroundColor,
        },
        authBackgroundWrapper: {
            backgroundImage: `url(${ authAppBackgroundImage?.src || '' })`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        gridWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mydetails_Profile: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 0rem',
            position: 'relative',
            width: 'fit-content',
            '&:hover': {
                '& $userAvatar': {
                    zIndex: '1',
                },
                '& $uploadImageWrapper': {
                    zIndex: '3',
                },
                '& $cameraImageWrapper': {
                    zIndex: '2',
                },
            },
        },
        userAvatar: {
            borderRadius: '50%',
            zIndex: '1',
        },
        fileInputStyle: {
            cursor: 'pointer',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
        },
        uploadImageWrapper: {
            cursor: 'pointer',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
        },
        phoneHeadingWrapper: {
            margin: '1rem 0',
            paddingTop: '1.5rem',
        },
        phoneContentWrapper: {
            margin: '1rem 0',
            paddingBottom: '0.5rem',
        },
        cameraImageWrapper: {
            position: 'absolute',
            right: 0,
            left: 0,
            textAlign: 'center',
            display: 'flex',
            minHeight: '150px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconWrapper: {
            alignSelf: 'center',
            color: '#fff',
        },
    });
};
export default styles;
