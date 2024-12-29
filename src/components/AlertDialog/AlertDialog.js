import React from 'react';
import { Dialog as MuiDialog } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { bool, string } from 'prop-types';
import useDeviceHook from 'hooks/customDeviceTypeHook';
import styles from './layout/AlertDialog.styles.default';

const useStyles = makeStyles(styles);

const AlertDialog = ({
    open = false, maxWidth = 'md', success, title, description, onClose = () => {},
}) => {
    const classes = useStyles({ success });

    let successType = '';
    if (!success) {
        successType = 'error';
    }

    const { isMobile } = useDeviceHook();

    return (
        <MuiDialog
            open={open}
            maxWidth={maxWidth}
            className={classes.container}
            aria-labelledby="generic-alert-dialog-title"
            aria-describedby="generic-alert-dialog-description"
            fullWidth
            onClose={onClose}
        >
            <div className="dialog_inner_wrapper">
                {isMobile && (
                    <div
                        aria-hidden="true"
                        onClick={() => onClose(false)}
                        className="close_btn"
                    ><CloseIcon />
                    </div>
                )}
                <div className={`${ classes.alertDialogWrapper } ${ successType }`}>
                    <div className="inline">

                        <div className={classes.leftImageWrapper}>
                            {success ? <CheckIcon className={`${ classes.colorWrapper } success`} fontSize="large" /> : <CloseIcon className={`${ classes.colorWrapper } error`} fontSize="large" />}
                        </div>
                        <div className={classes.contentWrapper}>
                            <Typography textTransform="capitalize" type="sub-title2" className={classes.mobileHeaderWrapper}>{title}</Typography>
                            <Typography textTransform="capitalize" type="sub-title1" className={classes.mobileDescriptionWrapper}>{description}</Typography>
                        </div>
                        <div className={classes.closeWrapper} role="button" tabIndex="-1" onClick={onClose} onKeyDown={onClose}>
                            <CloseIcon className={classes.colorWrapper} />
                        </div>
                    </div>
                </div>
            </div>
        </MuiDialog>
    );
};

AlertDialog.propTypes = {
    title: string,
    open: bool,
    maxWidth: string,
};

AlertDialog.defaultProps = {
    title: '',
    open: false,
    maxWidth: '',
};

export default AlertDialog;
