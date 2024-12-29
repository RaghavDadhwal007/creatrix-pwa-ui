import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Typography from '@components/Typography/Typography';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/MobileViewSubscriber.styles.default';
import FooterFunc from './functionality/FooterSubscribe.func';

const useStyles = makeStyles(styles);

const FooterSubscribe = ({ data }) => {
    const classes = useStyles();
    const {
        fieldTypes, formikProps,
    } = FooterFunc();
    const subscribeTitle = data?.subscribe_box;
    return (
        <Grid key={JSON.stringify(data)} item xs={12} className={classes.socialMediaBlock}>
            <div>
                <Typography type="sub-title4">{subscribeTitle?.title}</Typography>
                <div className={classes.subscriberCaption}>
                    <Typography type="caption4">{ReactHTMLParser(subscribeTitle?.copy)}</Typography>
                </div>
                <div className={classes.footerTextfieldBlock}>
                    <AuthFormWrapper
                        formikProps={formikProps}
                        formFields={fieldTypes}
                    />
                </div>
            </div>
        </Grid>
    );
};

export default FooterSubscribe;
