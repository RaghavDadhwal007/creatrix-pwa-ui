import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { node, string } from 'prop-types';
import React from 'react';
import styles from './layout/PlansCardWrapper.styles.default';

const useStyles = makeStyles(styles);

const PlansCardWrapper = ({
    children,
    title,
    description,
    btnTitle,
    type,
}) => {
    const classes = useStyles();

    return (
        <div className={`${ classes.cardWrapper } ${ type }`}>
            <Grid container justifyContent="center">
                <Typography
                    type={type === 'Basic' ? 'planCardTitle-1' : 'planCardTitle-2'}
                >{title}
                </Typography>
                <Typography
                    type={type === 'Basic' ? 'planCardBody-1' : 'planCardBody-2'}
                >{description}
                </Typography>
                {children}
                <Grid className={classes.buttonWrapper}>
                    <Button
                        disableRipple
                        type={type === 'Basic' ? 'transparent-btn' : 'dark-btn'}
                    >{btnTitle}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

PlansCardWrapper.propTypes = {
    children: node.isRequired,
    type: string,
};

PlansCardWrapper.defaultProps = {
    type: 'Basic',
};

export default PlansCardWrapper;
