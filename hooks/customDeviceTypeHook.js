import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useDeviceTypeHook = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    const isTabletDevice = useMediaQuery(theme.breakpoints.down('laptop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const isMediumDevice = useMediaQuery(theme.breakpoints.only('md'));
    const extraLargeDevice = useMediaQuery(theme.breakpoints.up('md'));
    const belowLargeDevice = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptopDevice = useMediaQuery(theme.breakpoints.only('laptop'));
    const isLaptopLargeDevice = useMediaQuery(theme.breakpoints.only('laptoplg'));

    const isMobileSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm')) && !isMobileSmallDevice;
    const isLargeDevice = useMediaQuery(theme.breakpoints.not('md')) && !isSmallDevice && extraLargeDevice;
    const isSmallLaptopDevice  = useMediaQuery(theme.breakpoints.down('lg'));

    const handleCurrentViewPort = () => {
        if (isMobile) {
            return 'mobile';
        }
        if (isTabletDevice) {
            return 'tablet';
        }
        return 'desktop';
    };

    return {
        isDesktop,
        isTabletDevice,
        isLaptopLargeDevice,
        isMediumDevice,
        isSmallDevice,
        isLargeDevice,
        isLaptopDevice,
        isMobileSmallDevice,
        isSmallLaptopDevice,
        currentViewport: handleCurrentViewPort(),
        isMobile,
        belowLargeDevice,
    };
};

export default useDeviceTypeHook;
