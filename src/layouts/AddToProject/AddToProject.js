import Button from '@components/Button/Button';
import CustomMenu from '@components/CustomMenu/CustomMenu';
import Typography from '@components/Typography/Typography';
import { MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import React from 'react';
import useAddToProjectFunc from './functionality/AddToProject.func';
import styles from './layout/AddToProject.styles.default';

const useStyles = makeStyles(styles);

const AddToProjects = ({
    projectMenuAnchor,
    isProjectMenuOpen,
    hanldeCloseProjectMenu,
    myProjectList,
    handleAddProjectDialogOpen,
    videoData,
}) => {
    const classes = useStyles();
    const { icons: { AddIcon } } = assets;
    const { addGroupMedia, addGroupMediaLoading } = useAddToProjectFunc();

    return (
        <CustomMenu anchorEl={projectMenuAnchor} open={isProjectMenuOpen} handleClose={hanldeCloseProjectMenu}>
            <Typography type="sub-title7">Projects:</Typography>
            <div className={classes.subWrapper}>
                {myProjectList?.map((item) => (
                    <MenuItem
                        className={classes.menuItem}
                        key={item}
                        onClick={() => addGroupMedia(videoData.asset_id, item.id)}
                        disabled={addGroupMediaLoading}
                    >
                        {item?.name}
                    </MenuItem>
                ))}
            </div>
            <div className={classes.menuBtnWrapper}>
                <Button
                    startIcon={<AddIcon />}
                    className={classes.menuBtn}
                    onClick={handleAddProjectDialogOpen}
                >
                    Add project
                </Button>
            </div>
        </CustomMenu>
    );
};

export default AddToProjects;
