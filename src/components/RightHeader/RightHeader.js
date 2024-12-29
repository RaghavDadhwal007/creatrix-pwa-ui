import Image from '@components/Image/Image';
import Typography from '@components/Typography/Typography';
import Grow from '@mui/material/Grow';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import Link from '../Link/Link';
import useRightHeaderFunc from './functionality/RightHeader.func';
import styles from './layout/RightHeader.style.default';
import SubscriptionHeaderButtons from './SubscriptionPlanButtons';

const useStyles = makeStyles(styles);

const RightHeader = ({
    data, handleOpenProfileDropdown, userData, userAvatar, openMenu,
}) => {
    const classes = useStyles();
    const {
        handleDialogOpen,
    } = useRightHeaderFunc();
    const { icons: { DropdownArrow } } = assets;

    return (
        <div className={classes.flexBox}>
            {data?.map((blocks) => {
                switch (Object.keys(blocks)?.[ 0 ]) {
                    case 'menu':
                        return (
                            <div key={blocks.menu?._metadata.uid} className={classes.linkWrapper}>
                                {blocks.menu.reference[ 0 ].menu_blocks.map((menus) => {
                                    switch (Object.keys(menus)?.[ 0 ]) {
                                        case 'menu_groups':
                                            if ((userData?.accessToken && menus?.menu_groups?.heading_link?.title === 'Login') || (!userData?.accessToken && menus?.menu_groups?.heading_link?.title === 'Log out')) {
                                                return null;
                                            }
                                            if (userData?.accessToken && menus?.menu_groups?.heading_link?.title?.toLowerCase?.() === 'my profile') {
                                                return null;
                                            }
                                            if (menus?.menu_groups?.main_menu_presentation === 'link') {
                                                if (menus?.menu_groups?.heading_link?.title?.toLowerCase?.() === 'login' || menus?.menu_groups?.heading_link?.title?.toLowerCase?.() === 'sign in') {
                                                    return (<Typography key={menus?.menu_groups._metadata.uid} type="link" onClick={() => handleDialogOpen(menus?.menu_groups?.heading_link?.title)}>{menus?.menu_groups?.heading_link?.title}</Typography>);
                                                }
                                                if (menus?.menu_groups?.heading_link?.title?.toLowerCase?.() === 'log out' || menus?.menu_groups?.heading_link?.title?.toLowerCase?.() === 'sign out') {
                                                    return (
                                                        <div className={classes.imageWrapper}>
                                                            <Image
                                                                src={userData?.profile_image || userAvatar}
                                                                alt="User Avatar"
                                                                onClickImage={handleOpenProfileDropdown}
                                                            />
                                                            {openMenu && (
                                                                <div className={classes.dropdownArrowIcon}>
                                                                    <Grow
                                                                        in={openMenu}
                                                                        {...(openMenu ? { timeout: 700 } : {})}
                                                                    >
                                                                        <div>
                                                                            <DropdownArrow />
                                                                        </div>
                                                                    </Grow>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                }
                                                return (
                                                    menus?.menu_groups?.heading_link?.title
                                                    && (
                                                        <Link key={menus?.menu_groups._metadata.uid} href={menus?.menu_groups?.heading_link?.href || '/'}>
                                                            <a>
                                                                <Typography
                                                                    key={menus?.menu_groups._metadata.uid}
                                                                    type="link"
                                                                >
                                                                    {menus?.menu_groups?.heading_link?.title}
                                                                </Typography>
                                                            </a>
                                                        </Link>
                                                    )
                                                );
                                            }
                                            if (menus?.menu_groups?.main_menu_presentation === 'button') {
                                                return (
                                                    <SubscriptionHeaderButtons
                                                        menus={menus}
                                                        handleDialogOpen={handleDialogOpen}
                                                        userData={userData}
                                                    />
                                                );
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                    return <></>;
                                })}
                            </div>
                        );
                    default:
                        return <></>;
                }
            })}

        </div>
    );
};

export default RightHeader;
