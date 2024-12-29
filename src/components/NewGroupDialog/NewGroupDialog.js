import Button from '@components/Button/Button';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import InnerModal from 'src/layouts/InnerModal/InnerModal';
import useNewGroupHook from './functionality/NewGroupDialog.func';
import styles from './layout/NewGroupDialog.styles.default';

const useStyles = makeStyles(styles);

const NewGroupDialog = () => {
    const classes = useStyles();

    const {
        fieldTypes, formikProps, handleSubmit, isLoading,
    } = useNewGroupHook();

    return (
        <InnerModal>
            <Typography className={classes.textWrapper}>
                Add New Group
            </Typography>
            <form
                className={classes.formWrapper}
                onSubmit={handleSubmit}
            >
                <AuthFormWrapper formFields={fieldTypes} formikProps={formikProps}  />
                <div className={classes.addProjectButton}>
                    <Button disabled={isLoading}>
                        {isLoading ? <CircularLoading type="small" /> : 'Add group'}
                    </Button>
                </div>
            </form>
        </InnerModal>

    );
};

export default NewGroupDialog;
