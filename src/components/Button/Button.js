import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { string } from 'prop-types';
import styles from './layout/Button.styles.default';

const useStyles = makeStyles(styles);

const Button = ({
    children,
    className = '',
    type = 'primary-btn',
    buttonType = '',
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <MuiButton
            type={buttonType}
            className={`${ classes.buttonStyles } ${ className } ${ type }`}
            {...otherProps}
        >
            {children}
        </MuiButton>
    );
};

export default Button;

/*
    type= {'primary-btn' || 'secondary-btn' || 'transparent-btn' || 'tertiary-btn' ||
           'icon-btn' }
*/

Button.propTypes = {
    className: string,
    type: string,
};

Button.defaultProps = {
    className: '',
    type: 'primary-btn',
};
