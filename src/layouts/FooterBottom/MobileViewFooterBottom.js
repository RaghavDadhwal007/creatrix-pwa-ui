import { makeStyles } from '@mui/styles';
import React from 'react';
import Typography from '@components/Typography/Typography';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/MobileViewFooterBottom.styles.default';

const useStyles = makeStyles(styles);

const MobileViewFooterBottom = ({ data }) => {
    const classes = useStyles();
    const footerbottomData = data?.copy?.copy;
    return (
        <div key={JSON.stringify(data)} className={classes.footerCopyRightTxt}>
            <div className={classes.footerBottomCaption}>
                <Typography type="caption4">{ReactHTMLParser(footerbottomData)}</Typography>
            </div>
        </div>
    );
};

export default MobileViewFooterBottom;
