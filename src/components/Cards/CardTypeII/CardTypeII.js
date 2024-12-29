import { makeStyles } from '@mui/styles';
import { string } from 'prop-types';
import styles from './layout/CardTypeII.default.style';

const useStyles = makeStyles(styles);

const CardType1 = ({ children, className = '' }) => {
    const classes = useStyles();
    return (
        <div className={`${ classes.cardContainer } ${ className }`}>
            {children}
        </div>
    );
};

CardType1.propTypes = {
    className: string,
};

CardType1.defaultProps =  {
    className: '',
};

export default CardType1;
