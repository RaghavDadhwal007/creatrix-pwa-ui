import Button from '@components/Button/Button';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { array, func, string } from 'prop-types';
import React from 'react';
import styles from './layout/NavSlider.styles.default';

const useStyles = makeStyles(styles);

const NavSlider = ({
    options,
    selectedOption,
    setSelectedOption,
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid container alignItems="center">
                {options.map((option) => (
                    <Grid className={classes.optionItem} item key={option.id}>
                        <Button
                            disableRipple
                            onClick={() => setSelectedOption(`option-${ option.id }`)}
                            type="text-btn"
                        >{option.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.navLine} />
            <div className={`${ classes.selectedLine } ${ selectedOption }`} />
        </>
    );
};

/*
    NavSlider
    can be used on: a) download history page (with 3 options)
                    b) terms and conditions page (with 3 options)
                    c) My Subscription page (with 6 options) / 6 options need to be implemented yet

    the format of options array => [{ id: 1, name: option name }]

*/

NavSlider.propTypes = {
    options: array.isRequired,
    selectedOption: string.isRequired,
    setSelectedOption: func.isRequired,
};

export default NavSlider;
