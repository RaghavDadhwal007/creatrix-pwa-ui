import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import InnerModal from '../InnerModal/InnerModal';
import useDeleteProjectModalHook from './functionality/DeleteProjectModal.func';
import styles from './layout/DeleteProjectModal.styles.default';

const useStyles = makeStyles(styles);

const DeleteProjectModal = () => {
    const classes = useStyles();

    const { handleDelete, handleCancel, loading } = useDeleteProjectModalHook();

    return (
        <InnerModal>
            <Typography className={classes.textWrapper}>
                Delete Project?
            </Typography>
            <Typography className={classes.subText}>
                Are you sure, you want to delete this project?
            </Typography>
            <div className={classes.btnWrapper}>
                {loading ? <CircularLoading type="small" /> : (
                    <div className={classes.btnWrapper}>
                        <Button onClick={handleDelete} className={classes.deleteBtn}>Delete</Button>
                        <Button onClick={handleCancel} className={classes.cancelBtn}>Cancel</Button>
                    </div>
                )}
            </div>
        </InnerModal>
    );
};

export default DeleteProjectModal;
