import Image from '@components/Image/Image';
import ProfileDropdown from '@components/ProfileDropdown/ProfileDropdown';
import Typography from '@components/Typography/Typography';
import { Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import CustomNavigationHook from 'hooks/customNavigationHook';
import useUserHook from 'hooks/CustomUserHook';
import styles from './layout/ProfileDropdownView.styles.default';

const useStyles = makeStyles(styles);

const ProfileDropdownView = ({
    handleCloseProfileDropdown, openMenu, data, openProfileDropdown,
}) => {
    const classes = useStyles();
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { logoutUser, userData } = useUserHook();
    const { images: { userAvatar } } = assets;
    const filteredMenuDropdown = data?.[ 0 ]?.menu?.reference?.[ 0 ]?.menu_blocks?.filter((item) => {
        if (item?.menu_groups?.menu_item?.length) {
            return item;
        }
        return null;
    });
    const menuProfileDropdownData = filteredMenuDropdown?.[ 0 ]?.menu_groups?.menu_item;

    const handleRedirectRoutes = (item) => {
        if (item?.title === 'Log out') {
            handleCloseProfileDropdown();
            logoutUser();
            handleRedirect(item?.href);
        } else {
            handleCloseProfileDropdown();
            handleRedirect(item?.href);
        }
    };
    return (
        <ProfileDropdown
            handleCloseProfileDropdown={handleCloseProfileDropdown}
            openMenu={openMenu}
            openProfileDropdown={openProfileDropdown}
        >
            <div className={classes.menuBlock}>
                <div className={classes.profileDropdownImgWrapper}>
                    <div className={classes.dropDownImageWrapper}>

                        <Image
                            src={userData?.profile_image || userAvatar}
                            alt={userData?.lastName || ''}
                        />
                    </div>
                    <div className={classes.dropdownProfileCardWrapper}>
                        <Typography className={classes.profileDropdownUserEmail}>
                            {userData ? userData?.email : ''}
                        </Typography>
                        <Typography muted className={classes.profileDropdownUserDownloads}>
                            Remaining downloads : 0
                        </Typography>
                    </div>
                </div>
                <Divider />
                {menuProfileDropdownData?.length && menuProfileDropdownData?.map((item) => (
                    <div key={item?._metadata?.uid} className={classes.menuList}>
                        <div className={classes.imageWrapper}>
                            <Image
                                src={item?.svg_icon?.url || ''}
                                alt={item?.svg_icon?.filename || ''}
                            />
                        </div>
                        <Typography
                            noWrap
                            onClick={item?.sub_menu_link?.title === 'Invoice history' ?  () => { } : () => handleRedirectRoutes(item?.sub_menu_link)}
                            type="link"
                        >
                            {item?.sub_menu_link?.title}
                        </Typography>
                    </div>
                ))}
            </div>
        </ProfileDropdown>
    );
};

export default ProfileDropdownView;
