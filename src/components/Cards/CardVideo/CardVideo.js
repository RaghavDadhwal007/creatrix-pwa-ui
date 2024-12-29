import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import styles from './layout/CardVideo.style.default';

const useStyles = makeStyles(styles);

const CardVideo = ({ item }) => {
    const classes = useStyles();

    return (

        <div className={classes.mainWrapper}>
            <Image
                src={item}
                alt="Video Card Image"
                layout="fill"
                className={classes.imageStyle}
            />

        </div>

    );
};

export default CardVideo;
