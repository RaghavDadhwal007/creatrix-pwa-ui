import React from 'react';
import { makeStyles } from '@mui/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { string, func } from 'prop-types';
import styles from './layout/Checkbox.styles.default';

const useStyles = makeStyles(styles);

const Checkboxes = ({ label, handleChecked }) => {
    const classes = useStyles();
    return (
        <div className={classes.checkboxWrapper}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox onClick={handleChecked} />}
                    label={label}
                />
            </FormGroup>
        </div>
    );
};

export default Checkboxes;

Checkbox.propTypes = {
    label: string,
    handleChecked: func,
};

Checkbox.defaultProps = {
    label: '',
    handleChecked: () => {},
};
