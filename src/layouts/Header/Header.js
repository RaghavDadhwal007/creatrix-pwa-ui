import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './layout/Header.styles.default';

const useStyles = makeStyles(styles);

const Header = ({
    children,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.Header_container}>{children}</div>
    );
};

export default Header;
