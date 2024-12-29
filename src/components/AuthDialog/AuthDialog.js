import Typography from '@components/Typography/Typography';
import { Close } from '@mui/icons-material';
import { Dialog as MuiDialog } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import { makeStyles } from '@mui/styles';
import { bool, func, string } from 'prop-types';
import styles from './layout/AuthDialog.styles.default';

const useStyles = makeStyles(styles);

const AuthDialog = ({
    open, onClose, maxWidth = 'sm', children, title, primary = true, loading,
}) => {
    const classes = useStyles({ primary });
    return (
        <>
            <MuiDialog
                open={open}
                onClose={() => !loading && onClose(false)}
                aria-labelledby="generic-auth-dialog-title"
                aria-describedby="generic-auth-dialog-description"
                fullWidth
                maxWidth={maxWidth}
                className={classes.dialogWrapper}
            >
                <div
                    aria-hidden="true"
                    onClick={() => !loading && onClose(false)}
                    className="close_btn"
                ><Close />
                </div>
                <div className="dialog_inner_wrapper">
                    <div className={classes.dialogBlock}>
                        <DialogContent>
                            {title && (
                                <div className={classes.heading}>
                                    <Typography textTransform="capitalize" type="heading" className={classes.heading_text}>{title}</Typography>
                                </div>
                            )}
                            {children}
                        </DialogContent>
                    </div>
                </div>

            </MuiDialog>
        </>
    );
};

AuthDialog.propTypes = {
    title: string,
    open: bool,
    onClose: func,
    maxWidth: string,
};

AuthDialog.defaultProps = {
    title: '',
    open: false,
    onClose: () => {},
    maxWidth: '',
};

export default AuthDialog;
