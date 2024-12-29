import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import styles from './layout/CardHomeAudio.style.default';

const useStyles = makeStyles(styles);

const CardHomeAudio = ({ item }) => {
    const classes = useStyles();
    return (

        <div className={classes.mainWrapper}>
            <Image
                src={item}
                alt="Video Card Image"
                layout="responsive"
                height={200}
                width={350}
            />
            <div className={classes.titleWrapper}>
                <Typography type="body1">
                    Nature
                </Typography>
            </div>
        </div>

    );
};

export default CardHomeAudio;
