import { Typography as MuiTypography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/Typography.style.default';

const useStyles = makeStyles(styles);

const Typography = ({
    type = 'body1',
    muted = false,
    isLink = false,
    isUnderline = false,
    children,
    className = '',
    textTransform = 'normal',
    fontStyle = 'normal',
    color = '',
    style = {},
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <>
            <MuiTypography
                className={`${ classes.textStyle } ${ type } ${ isLink && 'link' } ${ isUnderline && 'underline' } ${ muted && 'text-muted' } ${ className }`}
                style={{
                    textTransform, fontStyle, color, ...style,
                }}
                {...otherProps}
            >
                {children}
            </MuiTypography>
        </>
    );
};

export default Typography;

/*
    type= {'big-title' || 'heading' || 'sub-title1'
            || 'sub-title2' || 'body1' || 'caption' || 'link' || 'caption-1' || 'heading-1' ||
            sub-title3 || 'title-1' || caption4  || sub-title4    || link1
        }

*/
