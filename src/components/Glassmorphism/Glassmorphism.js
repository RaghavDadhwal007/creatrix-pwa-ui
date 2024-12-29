import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './layout/Glassmorphism.styles.deafult';

const useStyles = makeStyles(styles);
const Glassmorphism = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} className={classes.boxBlock}>
                {children}
            </Grid>
        </Grid>
    );
};

export default Glassmorphism;
