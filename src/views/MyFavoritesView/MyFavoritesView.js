/* eslint-disable react/no-array-index-key */
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './layout/MyFavoritesView.styles.default';

const useStyles = makeStyles(styles);

const MyFavoritesView = ({ title, description }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12} classes={{ root: classes.heightWrapper }}>
                <Typography
                    type="heading-2"
                >
                    {title}
                </Typography>
                <Grid container marginTop={2} columnSpacing={6} rowSpacing={3} classes={{ root: classes.heightWrapper }}>
                    <Grid item xs={12} className={classes.noProjectWrapper}>
                        <div>
                            <Typography
                                type="heading"
                            >
                                {description}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default MyFavoritesView;
