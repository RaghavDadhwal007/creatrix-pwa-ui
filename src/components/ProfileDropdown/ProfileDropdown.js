import React from 'react';
import { makeStyles } from '@mui/styles';
import Menu from '@mui/material/Menu';
import styles from './layout/ProfileDropdown.style.default';

const useStyles = makeStyles(styles);

const ProfileDropdown = ({
    children, openMenu, handleCloseProfileDropdown, openProfileDropdown,
}) => {
    const classes = useStyles();

    return (
        <Menu
            anchorEl={openProfileDropdown}
            open={openMenu}
            onClose={handleCloseProfileDropdown}
            className={classes.main}
        >
            <div>
                {children}
            </div>
        </Menu>
    );
};

export default ProfileDropdown;
