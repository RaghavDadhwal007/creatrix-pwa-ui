import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import images from 'assets/images';
import { useEffect, useState } from 'react';
import styles from './layout/CardHomeVideo.style.default';

const useStyles = makeStyles(styles);

const CardHomeVideo = ({ blockItem }) => {
    const classes = useStyles();

    const [ imageUrl, setImageUrl ] = useState(images.cardImage);
    const [ headingText, setHeadingText ] = useState('');

    useEffect(() => {
        if (blockItem?.image?.url) {
            setImageUrl(blockItem?.image?.url);
        }
        if (blockItem?.heading) {
            setHeadingText(blockItem?.heading);
        }
    }, [ blockItem ]);

    return (

        <div className={classes.mainWrapper}>
            <Image
                src={imageUrl}
                alt="Video Card Image"
                layout="responsive"
                height={320}
                width={350}
            />
            <div className={classes.titleWrapper}>
                <Typography type="body1">
                    {ReactHTMLParser(headingText)}
                </Typography>
            </div>
        </div>

    );
};

export default CardHomeVideo;
