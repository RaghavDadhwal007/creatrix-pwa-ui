import React from 'react';
import { Dialog as MuiDialog } from '@mui/material';
import DialogTitle  from '@mui/material/DialogTitle';
import DialogContent  from '@mui/material/DialogContent';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import styles from './layout/Dialog.styles.default';

const useStyles = makeStyles(styles);

const Dialog = ({
    open, title, children, maxWidth = 'sm',
}) => {
    const classes = useStyles();

    return (
        <MuiDialog
            onClick={(e) => e.stopPropagation()}
            open={open}
            aria-labelledby="generic-dialog-title"
            aria-describedby="generic-dialog-description"
            fullWidth
            maxWidth={maxWidth}
        >
            <DialogTitle>
                <div className={classes.dialogTitleWrapper}>
                    <Typography textTransform="capitalize" type="sub-title1">{title}</Typography>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </MuiDialog>

    );
};

export default Dialog;
