import { Menu } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import styles from './layout/CustomMenu.styles.default';

const useStyles = makeStyles(styles);

const CustomMenu = ({
    anchorEl,
    open,
    handleClose,
    children,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrapper}>
            <Menu
                className={classes.menuWrapper}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorPosition={{
                    top: 100,
                }}
            >
                <div
                    className={classes.arrow}
                />
                {children}
            </Menu>
        </div>
    );
};

export default CustomMenu;
