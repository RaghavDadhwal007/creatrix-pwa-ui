import CustomSearchBar from '@components/CustomS‎earchBar‎/CustomS‎earchBar‎';
import {
    Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { themeColor } from 'styles/theme/theme';
import InnerModal from '../InnerModal/InnerModal';
import styles from './layout/ViewProjects.styles.default';

const useStyles = makeStyles(styles);

const ViewProjects = () => {
    const classes = useStyles();
    return (
        <InnerModal buttonTitle="View all projects">
            <div className={classes.searchWrapper}>
                <CustomSearchBar parentClasses={{ container: classes.searchBarWrapper, child: classes.searchChildWrapper }} searchIconLeft />
            </div>
            <List className={classes.listWrapper}>
                <ListItem className={classes.listItemWrapper}>
                    <ListItemIcon className={classes.listItemIconWrapper}>
                        <Inventory2OutlinedIcon htmlColor={themeColor.white} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="My Project 1"
                        primaryTypographyProps={{ // these properties cannot be passed through className
                            fontSize: '1.25rem !important',
                            fontWeight: '500',
                        }}
                    />
                </ListItem>
                <Divider color={themeColor.white} />
                <ListItem className={classes.listItemWrapper}>
                    <ListItemIcon className={classes.listItemIconWrapper}>
                        <AddBoxOutlinedIcon htmlColor={themeColor.white} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="New Project"
                        primaryTypographyProps={{ // these properties cannot be passed through className
                            fontSize: '1.25rem !important',
                            fontWeight: '500',
                        }}
                    />
                </ListItem>
            </List>
        </InnerModal>
    );
};

export default ViewProjects;
