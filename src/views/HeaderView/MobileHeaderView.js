import SideDrawer from '@components/MobileViewSideDrawer/SideDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import assets from 'assets';
import CustomNavigationHook from 'hooks/customNavigationHook';
import Link from '@components/Link/Link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ImageWidget from 'src/layouts/Widgets/ImageWidget/ImageWidget';
import useHeaderView from './func/HeaderView.func';
import styles from './layout/MobileViewHeader.styles.default';

const useStyles = makeStyles(styles);

const MobileHeaderView = () => {
    const classes = useStyles();
    const router = useRouter();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const isHomePage = routes.homepage.path === router.asPath;
    const [ positionY, setPositionY ] = useState(0);
    const [ transparent, setTransparent ] = useState(!(isHomePage && positionY > 25));

    const {
        isDrawerOpen, setIsDrawerOpen, data, handleLogoutUser,
    } = useHeaderView();

    const blockArray = data?.content?.entries[ 0 ]?.header_left_block;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => { setPositionY(window.scrollY); }, { passive: true });
            setTransparent(!(isHomePage && positionY > 25));
        }
    }, [ positionY, isHomePage ]);
    const { icons: { SearchWhite } } = assets;

    return (
        <div>
            <div
                className={`${ classes.upperHeader } ${ !isHomePage && 'background' } ${ transparent ? 'transparent' : 'background' }`}
            >
                {blockArray?.map((blocks) => {
                    switch (Object.keys(blocks)?.[ 0 ]) {
                        case 'logo':
                            return  (
                                <Link key={blocks.logo.image.uid} href="/" as={blocks?.logo?.link?.href || '/'}>
                                    <div className={classes.logoDivWrapper}>
                                        <ImageWidget blocks={blocks} />
                                    </div>
                                </Link>
                            );
                        case 'menu':
                            return (
                                <>
                                    <div className={classes.rightMenu}>
                                        <div className={classes.iconButtonStyle}>
                                            <SearchWhite onClick={() => handleRedirect(routes.searchResult.path)} />
                                        </div>

                                        <SideDrawer
                                            open={isDrawerOpen}
                                            onClose={() => setIsDrawerOpen(false)}
                                            data={blocks}
                                            handleLogoutUser={handleLogoutUser}
                                        />
                                        <MenuIcon className={classes.menuIcon} onClick={() => setIsDrawerOpen(true)} />
                                    </div>
                                </>
                            );
                        default:
                            break;
                    }
                    return null;
                })}
            </div>

        </div>

    );
};

export default MobileHeaderView;
