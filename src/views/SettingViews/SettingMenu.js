import Button from '@components/Button/Button';
import IconButton from '@components/IconButton/IconButton';
import MenuItem from '@components/MenuItem/MenuItem';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import useSettingMenu from './functionality/SettingMenu.func';
import styles from './layout/SettingMenu.default.styles';

const useStyles = makeStyles(styles);

const SettingLeftSideBar = ({ routes, isMobile }) => {
    const classes = useStyles();
    const { handleChangeSettingMenu, settingItemActiveKey } = useSettingMenu();

    return (
        <>
            {
                !isMobile ?  (
                    <div className={classes.settingSidebarTopSectionWrapper}>
                        <div className={classes.sideBarMenu}>
                            {

                                Object.keys(routes).map((item) => {
                                    const isActive = settingItemActiveKey === routes[ item ].id;
                                    return (
                                        <MenuItem
                                            isActive={isActive}
                                            onClick={() => handleChangeSettingMenu(routes[ item ].id, routes[ item ].path)}
                                            key={routes[ item ].id}

                                        >
                                            <div className={`${ classes.menuWrapper } ${ isActive ? classes.active_menu_item : '' }`}>
                                                <IconButton disableRipple className={classes.settingsIconWrapper}>
                                                    {routes[ item ]?.icon()}
                                                </IconButton>

                                                <Typography
                                                    className={isActive ? classes.active_menu_item : ''}
                                                    type="body1"
                                                >
                                                    {routes[ item ]?.name}
                                                </Typography>
                                            </div>
                                        </MenuItem>
                                    );
                                })

                            }
                        </div>
                    </div>

                )
                    : (
                        <div className={classes.buttonMappingWrapper}>
                            {

                                Object.keys(routes).map((item) => {
                                    const isActive = settingItemActiveKey === routes[ item ].id;
                                    return (
                                        <div className={classes.buttonWrapper} key={item?.id}>
                                            <Button type={isActive ? 'tertiary-btn setting' : 'transparent-header-btn setting'} isActive={isActive} onClick={() => handleChangeSettingMenu(routes[ item ].id, routes[ item ].path)}> {routes[ item ]?.name}</Button>
                                        </div>

                                    );
                                })

                            }

                        </div>
                    )
            }
        </>
    );
};

export default SettingLeftSideBar;
