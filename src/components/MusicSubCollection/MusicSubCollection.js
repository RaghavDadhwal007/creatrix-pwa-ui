/* eslint-disable jsx-a11y/media-has-caption */
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import {  PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';
import SliderSlick from '@components/SliderSlick/SliderSlick';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import Link from '../Link/Link';
import styles from './layout/MusicSubCollection.styles.default';
import MusicSubCollectionFunc from './functionality/MusicSubCollection.func';

const useStyles = makeStyles(styles);

const MusicCollection = ({ blockItem }) => {
    const { isMobile } = useDeviceTypeHook();
    const {
        handleExpand, isIndex, isPlaying, audioRef,
    } = MusicSubCollectionFunc();

    // render the style from the CMS
    const styleObj = {
        headingFontSize: blockItem[ 0 ]?.heading_style?.font_size,
        headingFontColor: blockItem[ 0 ]?.heading_style?.font_color,

    };

    const classes = useStyles(styleObj);

    const musicPlayer = () => (
        blockItem?.map((item, index) => (
            <div
                key={item}
                className={classes.mainWrapper}
                role="presentation"
                onClick={(event) => { handleExpand(index, event); }}
            >
                <Image
                    src={item?.image?.url}
                    alt="Music Card Image"
                    layout="responsive"
                    height={272}
                    width={433}
                />
                <div className={classes.audioBlock}>
                    <audio
                        controls={false}
                        ref={(element) => { audioRef.current[ index ] = element; }}
                    >
                        <source
                            type="audio/mp3"
                            src={item?.file?.url}
                        />
                    </audio>
                    <div className={classes.playIcon}>
                        {isPlaying && index === isIndex ? <PauseCircleOutline /> : <PlayCircleOutline /> }
                    </div>
                </div>

                <div className={classes.titleWrapper}>
                    <div className={classes.viewLink}>
                        <Link href={item?.link?.href || '/'}>
                            {item?.link?.title}
                        </Link>
                    </div>
                </div>
            </div>
        ))
    );

    return (
        isMobile ? (
            <div className={classes.sliderMain}>
                <SliderSlick>
                    {musicPlayer()}
                </SliderSlick>
            </div>
        ) :    musicPlayer()

    );
};

export default MusicCollection;
