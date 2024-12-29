import LeftHeader from '@components/LeftHeader/LeftHeader';
import RightHeader from '@components/RightHeader/RightHeader';
import { makeStyles } from '@mui/styles';
import ProfileDropdownView from '@views/ProfileDropdownView/ProfileDropdownView';
import routes from '@views/routes';
import assets from 'assets';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import CustomSearchHook from 'hooks/customSearchHook';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import useHeaderView from './func/HeaderView.func';
import HeaderSkeleton from './HeaderView.skeleton';
import styles from './layout/HeaderView.styles.default';
import MobileHeaderView from './MobileHeaderView';

const useStyles = makeStyles(styles);

const HeaderView = () => {
    const router = useRouter();
    const { data, isHeaderDataLoading } = useHeaderView();
    const { images: { userAvatar } } = assets;
    // we can use this position offset if needed to make upper header visibility on/off
    const isHomePage = routes.homepage.path === router.asPath;
    const classes = useStyles(isHomePage);
    const [ positionY, setPositionY ] = useState(0);
    const [ transparent, setTransparent ] = useState(!(isHomePage && positionY > 25));
    const [ cookies ] = useCookies([ 'user' ]);
    const accessToken = cookies?.user?.accessToken;
    const userProfileData = useSelector(({ userState }) => userState?.user);
    const userData = { accessToken, ...userProfileData };
    const [ openProfileDropdown, setOpenProfileDropdown ] = useState(null);
    const openMenu = Boolean(openProfileDropdown);
    const { useSearchHook } = CustomSearchHook;
    const { inputSearch, handleInputSearch, handleSearchSubmit } = useSearchHook();

    const { currentViewport } = useDeviceTypeHook();

    const handleOpenProfileDropdown = (event) => {
        setOpenProfileDropdown(event.currentTarget);
    };
    const handleCloseProfileDropdown = () => {
        setOpenProfileDropdown(null);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => { setPositionY(window.scrollY); }, { passive: true });
            setTransparent(!(isHomePage && positionY > 25));
        }
    }, [ positionY, isHomePage ]);

    if (currentViewport === 'mobile') {
        return (
            <MobileHeaderView />
        );
    }

    return (
        <>
            <div
                className={`${ classes.upperHeader } ${ !isHomePage && 'background' } ${ transparent ? 'transparent' : 'background' }`}
            >
                {isHeaderDataLoading ? (
                    <HeaderSkeleton />
                ) : (
                    <>
                        {data?.content?.entries?.[ 0 ]?.header_left_block && (
                            <LeftHeader
                                inputSearch={inputSearch}
                                handleInputSearch={handleInputSearch}
                                handleSearchSubmit={handleSearchSubmit}
                                isSearchEnabled={isHomePage ? positionY < 350 : false}
                                data={data?.content?.entries?.[ 0 ]?.header_left_block}
                                searchShowFlag={data?.content?.entries?.[ 0 ]?.is_search_homepage}
                            />
                        )}
                        {data?.content?.entries?.[ 0 ]?.header_right_block
                && (
                    <>
                        <RightHeader
                            userAvatar={userAvatar}
                            userData={userData}
                            data={data?.content?.entries?.[ 0 ]?.header_right_block}
                            handleOpenProfileDropdown={handleOpenProfileDropdown}
                            openMenu={openMenu}
                        />
                        <ProfileDropdownView
                            openProfileDropdown={openProfileDropdown}
                            handleCloseProfileDropdown={handleCloseProfileDropdown}
                            data={data?.content?.entries?.[ 0 ]?.header_right_block}
                            openMenu={openMenu}
                        />
                    </>
                )}
                    </>
                )}

            </div>
        </>
    );
};

export default HeaderView;
