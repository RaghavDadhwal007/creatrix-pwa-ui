import Typography from '@components/Typography/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './layout/TabItem.style.default';

const useStyles = makeStyles(styles);

const TabItem = ({
    active = false,
    children,
    className,
    onClick = () => {},
}) => {
    const classes = useStyles();
    return (
        <ButtonBase onClick={onClick}>
            <div className={`${ classes.tabItem } ${ active && 'active' } ${ className }`}>
                <Typography type="sub-title2" textTransform="uppercase">{children}</Typography>
                <div className="border" />
            </div>
        </ButtonBase>
    );
};

export default TabItem;

TabItem.propTypes = {
    active: bool,
    className: string,
    onClick: func.isRequired,
};

TabItem.defaultProps = {
    active: false,
    className: '',
};
