import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import helperFunctions from 'helperFunctions';
import useChangePasswordHook from './functionality/ChangePassword.func';
import styles from './layout/ChangePassword.styles.default';

const useStyles = makeStyles(styles);

const ChangePassword = () => {
    const classes = useStyles();
    const { passwordValidations } = helperFunctions;
    const {
        error, handleInputFocus, fieldTypes, formikProps, handleChangePassword, loading, passwordValidation,
    } = useChangePasswordHook();
    return (
        <div className={classes.container}>
            <div className={classes.mainWrapper}>
                <Typography type="heading">Change Password</Typography>
                <form onSubmit={handleChangePassword}>
                    <div className={classes.formWrapper}>
                        <AuthFormWrapper
                            formikProps={formikProps}
                            formFields={fieldTypes}
                            handleInputFocus={handleInputFocus}
                            passwordValidations={passwordValidations()}
                            passwordValidation={passwordValidation}
                            showValidation
                        />
                    </div>
                    {error && <div className={classes.error}><Typography type="sub-title1">{error}</Typography></div>}
                    <div className={classes.buttonWrapper}>
                        <Button type="primary-btn">
                            {loading ? <CircularLoading type="small" /> : 'Change Password'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
