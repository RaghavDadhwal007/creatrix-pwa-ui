import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import { string } from 'prop-types';
import styles from './layout/CardTypeIII.default.style';

const useStyles = makeStyles(styles);

const CardTypeIII = ({ children, className = '', title = '' }) => {
    const classes = useStyles();
    return (
        <div className={`${ classes.cardContainer } ${ className }`}>
            <Typography type="heading">{title}</Typography>
            {children}
        </div>
    );
};

CardTypeIII.propTypes = {
    className: string,
};

CardTypeIII.defaultProps =  {
    className: '',
};

export default CardTypeIII;
