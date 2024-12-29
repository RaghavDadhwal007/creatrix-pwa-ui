// colors
import { CacheProvider } from '@emotion/react';
import {
    createTheme, ThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import createEmotionCache from 'utility/createEmotionCache';
import useThemeHook from './functionality/Theme.func';

const clientSideEmotionCache = createEmotionCache();

const primaryColor = '#FB48C4';
const secondaryColor = '#00B796';
const secondaryBackgroundColor = '#f0f';
const commonActiveColor = '#1ABCFE';
const white = '#ffffff';
const black = '#000';
const disableColor = '#D9D9D9';
const greyish = '#151515';

const applicationMinWidth = '1440px';

export const themeColor = {
    skeletonColors: {
        baseColor: '#ffffff35',
        highlightColor: '#ffffff20',
    },
    primaryColor,
    secondaryColor,
    secondaryBackgroundColor,
    commonActiveColor,
    black,
    white,
    typographyColors: {
        headingColor: white,
        versionColor: '#1ABCFE',
    },
    buttonColors: {
        btnBgColor: primaryColor,
        btnSecondaryBgColor: 'transparent',
        btnSecondaryTextColor: '#000000',
        btnTxtColor: white,
        btnHoverBgColor: `${ primaryColor }aa`,
        btnFadeColor: `${ primaryColor }44`,    // light shade of primary color
        btnTransparentColor: '#6c6c6c00',
        darkGrey: '#262626',
        lightBlue: '#919EAB', // greyish shade of light blue
        forgetBtn: commonActiveColor,
        radioButtonColor: '#6B6B6B',
        formCaptchaButton: '#414141',
        darkColor: '#414141',
        transparentButton: '#f8f4ff',
        closeBtnObj: {
            iconColor: '#FF0000',
            backgroundColor: '#ffffff',
        },
    },
    audioBackground: '#262626B8',
    cardColors: {
        inputColor: '#EAEAEA',
        txtColor: '#B6B6B6',
        rememberTxtColor: '#868686',
        imageContainerColor: '#E5EFF8',
        bgColor: '#000',
        cardIIIBackgroundColor: '#262626',
        settingMenuBgColor: '#4ACBB4',
        cardIIBackgroundColor: '#242424',
        cardIIBorderColor: white,
        planCardBodyColor: '#212B36',
        cardCheckListColor: '#181059',
        planCardBodyTwoColor: '#637381',

    },
    iconColors: {
        activeIconColor: commonActiveColor,
        inActiveIconColor: white,
        buttonbgColor: '#C0BDBD',
    },
    textColors: {
        textFieldColor: '#343434',
    },
    footerColors: {
        footerBgColor: '#0E0E0E',
        footerTxtColor: '#A8A8A8',
        footerTextFieldColor: '#242424',
        footerBottomBgColor: '#141414',
    },
    blackLightShade: '#2F2F2F',
    darkBlue: '#1313139e',
    whiteColor: 'rgba(255, 255, 255, 0.08)',
    redColor: '#FF0000',
    labelColor: '#868686',
    darkGrey: '#2f2f2f',
    lightBlue: '#919EAB', // greyish shade of light blue
    lightGreen: '#4ACBB4',
    varientGreen: '#4598a2',
    opacityWhite: 'rgb(255,255,255, 0.5)',
    purple: '#181059',
    blackShade: '#212B36',
    lightBlueShade: '#637381',
    grey: '#242424',
    green: '#02B293',
    successAlertColor: '#00AE91',
    errorAlertColor: '#D03360',
    pink: '#FB48C4',
    fadeWhiteColor: '#fff7',
    lightGrey: '#E0E0E0',
    greyDark: '#292929',
    errorTxtColor: '#6AACE9',
    borderBottomColor: '#383838',
    applicationMinWidth,
    disableColor,
    cardShadow: greyish,
    errorColor: '#EE45BF',
};

// material ui theme wrapper obj

const ThemeWrapper = ({ children, appProps }) => {
    const { emotionCache = clientSideEmotionCache } = appProps;
    const { getCMSThemeData }  = useThemeHook();
    const { cmsAppColors, cmsThemeDataLoading } = getCMSThemeData();

    const updatedCMSThemeColors = {
        ...themeColor,
        primaryColor: cmsAppColors?.primary_color?.color || primaryColor,
        secondaryColor: cmsAppColors?.secondary_color?.color || secondaryColor,
    };
    const currentTheme = 'light';
    const fonts = [
        'Poppins', 'sans-serif',
    ].join(', ');

    const globalTheme = React.useMemo(
        () => createTheme({
            // shadows: [ 'none' ],
            typography: {
                caption: {
                    fontFamily: fonts,
                },
                fontFamily: fonts,
                heading: 'Poppins',

            },
            // breakpoints
            breakpoints: {
                values: {
                    xs: 320,
                    mobile: 320,
                    mobilelg: 425,
                    sm: 600,
                    tablet: 768,
                    md: 900,
                    laptop: 1024,
                    lg: 1200,
                    laptoplg: 1440,
                    xl: 1536,
                    mxl: 2133,
                    xxl: 2560,
                },
            },
            palette: {
                mode: currentTheme,
                ...updatedCMSThemeColors,
            },
        }),
        [ currentTheme, cmsThemeDataLoading ],
    );

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={globalTheme}>
                <div className={`theme-${ currentTheme }`}>
                    {children}
                </div>
            </ThemeProvider>
        </CacheProvider>

    );
};

export default ThemeWrapper;
