import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import {
    Drawer, List, ListItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MobileProfileView from '@views/ProfileDropdownView/MobileProfileView';
import React from 'react';
import MobileHeaderViewSideDrawerBeforeLogin from '@components/MobileHeaderViewSideDrawerBeforeLogin/MobileHeaderViewSideDrawerBeforeLogin';
import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Link from '../Link/Link';
import styles from './layout/SideDrawer.styles.default';
import SideDrawerFunc from './functionality/SideDrawer.func';

const useStyles = makeStyles(styles);

const SideDrawer = ({
    data,
    open,
    onClose,
    handleLogoutUser,
}) => {
    const classes = useStyles();
    const { handleDialogOpen } = SideDrawerFunc();
    const menuData = data?.menu?.reference[ 0 ]?.menu_blocks[ 0 ]?.menu_groups?.menu_item;
    const buttons = menuData.filter((menus) => menus.menu_type === 'Button');
    const listItems = menuData.filter((menus) => menus.menu_type !== 'Button');
    const accessToken  = useSelector(({ userState }) => userState.accessToken);

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            disableScrollLock="true"
            PaperProps={{
                sx: { width: '80%' },
            }}
        >
            <List className={classes.drawerSlide}>
                {!accessToken ? (
                    <MobileHeaderViewSideDrawerBeforeLogin
                        onClose={onClose}
                    />
                ) : (
                    <div
                        onClick={onClose}
                        aria-hidden="true"
                        className={classes.close_btn}
                    ><Close  />
                    </div>
                )}
                <div className={classes.slideItems}>
                    <MobileProfileView />
                    <ListItem className={classes.listItems}>
                        {listItems?.map((item) => {
                            if (item?.sub_menu_link?.title?.toLowerCase?.() === 'login' || item?.sub_menu_link?.title?.toLowerCase?.() === 'sign in') {
                                return (
                                    <Typography key={item?._metadata.uid} type="link2" onClick={() => { handleDialogOpen(item?.sub_menu_link?.title); onClose(); }}>{item?.sub_menu_link?.title}</Typography>
                                );
                            }
                            if (item?.sub_menu_link?.title?.toLowerCase?.() ===  'log out' || item?.sub_menu_link?.title?.toLowerCase?.() === 'sign out') {
                                return (
                                    <Typography key={item?._metadata.uid} type="link2" onClick={handleLogoutUser}>{item?.sub_menu_link?.title}</Typography>
                                );
                            }
                            return (
                                <Link key={item?._metadata.uid} href={item?.sub_menu_link?.href || '/'} onClick={onClose}>
                                    <Typography type="link2">{item?.sub_menu_link?.title}</Typography>
                                </Link>
                            );
                        })}
                    </ListItem>
                    <ListItem className={classes.listItemsButton}>
                        {buttons?.map((item) => {
                            if (item?.sub_menu_link?.title?.toLowerCase() ===  'sign up') {
                                return (
                                    <Button key={item?.sub_menu_link?.title} className={classes.drawerbtn} onClick={() => { handleDialogOpen(item?.sub_menu_link?.title?.toLowerCase()); onClose(); }}>{item?.sub_menu_link?.title}</Button>
                                );
                            }
                            return (
                                <Button key={item?.sub_menu_link?.title} className={classes.drawerbtn}>{item?.sub_menu_link?.title}</Button>
                            );
                        })}
                    </ListItem>
                </div>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
