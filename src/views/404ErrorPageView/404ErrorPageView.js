import React from 'react';
import { makeStyles } from '@mui/styles';
import ErrorPage from 'src/layouts/ErrorPage/ErrorPage';
import styles from './layout/404ErrorPage.styles.default';

const useStyles = makeStyles();

const ErrorPageView = () => {
    const classes = useStyles(styles);
    return (
        <div className={classes.fullWidth}>
            <ErrorPage />
        </div>
    );
};

export default ErrorPageView;
