import { makeStyles } from '@mui/styles';
import Image from '@components/Image/Image';
import assets from 'assets';
import styles from './layout/ImageWidget.styles.default';

const useStyles = makeStyles(styles);

const ImageWidget = ({ blocks }) => {
    const classes = useStyles();
    const { images: { creatigoLogo1 } } = assets;
    return (
        <div className={classes.imageWrapper}>
            <Image
                src={blocks?.logo?.image?.url || creatigoLogo1?.src || ''}
                alt="Creatigo Logo"
            />
        </div>
    );
};

export default ImageWidget;
