import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import helperFunctions from 'helperFunctions';
import styles from './layout/TextWidget.styles.default';

const useStyles = makeStyles(styles);

const TextWidget = ({ blocks }) => {
    const { cmsClasses } = helperFunctions;
    const cmsClass = cmsClasses(blocks?.menu_groups?.style);
    const classes = useStyles(cmsClass);
    return (
        <Typography
            type="link"
            className={classes.linkWrapper}
        >
            {blocks?.menu_groups?.heading_link?.title}
        </Typography>
    );
};

export default TextWidget;
