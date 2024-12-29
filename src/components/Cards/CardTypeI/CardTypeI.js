import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {
    func, string,
} from 'prop-types';
import styles from './layout/CardTypeI.style.default';

const useStyles = makeStyles(styles);

const CardTypeI = ({
    cardTitleInfo,
    buttonText,
    handleWholeCardClick,
    children,
}) => {
    const classes = useStyles();
    return (
        <div aria-hidden="true" onClick={handleWholeCardClick} className={classes.cardWrapper}>
            <div className={classes.cardImageWrapper}>
                {children}
            </div>
            <div className={classes.cardInfoWrapper}>
                <Typography alt={cardTitleInfo} isLink type="sub-title2" textTransform="capitalize">{cardTitleInfo}</Typography>
                {buttonText && (
                    <Button>
                        <Typography type="caption" textTransform="uppercase">{buttonText}</Typography>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CardTypeI;

CardTypeI.propTypes = {
    cardTitleInfo: string.isRequired,
    buttonText: string.isRequired,
    handleWholeCardClick: func.isRequired,
};
