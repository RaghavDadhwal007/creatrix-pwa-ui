import Button from '@components/Button/Button';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import InnerModal from 'src/layouts/InnerModal/InnerModal';
import useNewProjectHook from './functionality/NewProjectDialog.func';
import styles from './layout/NewProjectDialog.styles.default';

const useStyles = makeStyles(styles);

const NewProjectDialog = () => {
    const classes = useStyles();
    const {
        handleSubmit, formikProps, fieldTypes, isLoading,
    } = useNewProjectHook();

    return (
        <InnerModal>
            <Typography className={classes.textWrapper}>
                Add New Project
            </Typography>
            <form
                className={classes.formWrapper}
                onSubmit={handleSubmit}
            >
                <AuthFormWrapper formFields={fieldTypes} formikProps={formikProps}  />
                <div className={classes.addProjectButton}>
                    <Button disabled={isLoading}>
                        {isLoading ? <CircularLoading type="small" /> : 'Add project'}
                    </Button>
                </div>
            </form>
        </InnerModal>
    );
};

export default NewProjectDialog;
