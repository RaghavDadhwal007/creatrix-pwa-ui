import * as React from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@components/IconButton/IconButton';
import { MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import {
    array,
    func, string,
} from 'prop-types';
import useDropDownMenuHook from './functionality/DropDownMenu.func';
import styles from './layout/DropdownMenu.style.default';

const DropDownMenu = ({
    handleItemClick, Icon, menuItems, children,
}) => {
    const {
        open, handleClick, handleClose, anchorEl,
    } = useDropDownMenuHook();

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div>
            {Icon && (
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {Icon}
                </IconButton>
            )}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                p={0}
                className={classes.menuListStyles}
            >
                <div>
                    {menuItems ? menuItems.map((item) => (
                        <div key={item.id}>
                            <MenuItem
                                className={classes.menuItemStyles}
                                onClick={() => {
                                    handleItemClick(item.id);
                                    handleClose();
                                }}
                            >
                                {item.icon && (
                                    <IconButton className={classes.menuIconStyles}>
                                        {item.icon}
                                    </IconButton>
                                )}
                                <Typography type="caption">{item.name}</Typography>
                            </MenuItem>
                        </div>
                    )) : children }
                </div>

            </Menu>
        </div>
    );
};

export default DropDownMenu;

DropDownMenu.propTypes = {
    handleItemClick: func.isRequired,
    Icon: string,
    menuItems: array.isRequired,
};

DropDownMenu.defaultProps = {
    Icon: '',
};
