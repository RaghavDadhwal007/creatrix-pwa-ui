import Button from '@components/Button/Button';
import CardTypeIII from '@components/Cards/CardTypeIII/CardTypeIII';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import React from 'react';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import styles from '../layout/YoutubeClaimSupportView.styles.default';

const useStyles = makeStyles(styles);

const SupportForm = ({
    title,
    handleSubmit,
    formikProps,
    fieldTypes,
}) => {
    const classes = useStyles();
    const { isMobile } = useDeviceTypeHook();

    return (
        <div>
            {isMobile ? (
                <CardTypeIII title={title}>
                    <form onSubmit={handleSubmit} className={classes.formSubWrapper}>
                        <AuthFormWrapper formikProps={formikProps} formFields={fieldTypes} />
                        <div className={classes.submitBtn}>
                            <Button>Sumit to Support</Button>
                        </div>
                    </form>
                </CardTypeIII>
            )
                : (
                    <div className={classes.formWrapper}>
                        <Typography type="heading-3" className={classes.stepHeading}>{title}</Typography>
                        <form onSubmit={handleSubmit} className={classes.formSubWrapper}>
                            <AuthFormWrapper formikProps={formikProps} formFields={fieldTypes} />
                            <div className={classes.submitBtn}>
                                <Button>Sumit to Support</Button>
                            </div>
                        </form>
                    </div>
                )}
        </div>
    );
};

export default SupportForm;
