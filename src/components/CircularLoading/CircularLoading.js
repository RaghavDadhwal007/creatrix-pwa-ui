import CircularProgress  from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { string } from 'prop-types';
import styles from './layout/CircularLoading.styles.default';

const useStyles = makeStyles(styles);

const CircularLoading = ({
    type,
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <div className={classes.loadingWrapper}>
            <CircularProgress className={type} {...otherProps} />
        </div>
    );
};

/**
 * type = normal || small
*/

export default CircularLoading;

CircularLoading.propTypes = {
    type: string,
};

CircularLoading.defaultProps = {
    type: 'normal',
};
