import { makeStyles } from '@mui/styles';
import styles from './layout/MenuItem.style.default';

const useStyles = makeStyles(styles);

const MenuItem = ({
    className = '',
    isActive = false,
    onClick = () => {},
    children,
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <div
            className={`${ classes.menuItem } ${ isActive && 'active' } ${ className }`}
            onClick={onClick}
            aria-hidden="true"
            {...otherProps}
        >
            {/* <Typography type="sub-title2"> */}
            {children}
            {/* </Typography> */}
        </div>
    );
};

export default MenuItem;
