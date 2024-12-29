import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {
    array, string,
} from 'prop-types';
import styles from './layout/ToggleButton.style.default';

const useStyles = makeStyles(styles);

const ToggleButtonGroup = ({ initialValue, buttons, ...otherProps }) => {
    const classes = useStyles();
    return (
        <MuiToggleButtonGroup
            {...otherProps}
            className={classes.toggleGroupStyle}
            inputlabelprops={{
                className: classes.floatingLabelFocusStyle,
            }}
            fullWidth
            defaultValue={initialValue}
        >
            {buttons.map((btn) => (
                <ToggleButton key={btn.id} {...btn.otherProps} value={btn.value}>
                    {btn.content}
                </ToggleButton>
            ))}
        </MuiToggleButtonGroup>
    );
};

export default ToggleButtonGroup;

ToggleButtonGroup.propTypes = {
    initialValue: string,
    buttons: array.isRequired,
};

ToggleButtonGroup.defaultProps = {
    initialValue: '',
};
