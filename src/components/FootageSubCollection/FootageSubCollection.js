import {  PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Slider from 'react-slick';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Link from '../Link/Link';
import styles from './layout/FootageSubCollection.style.default';

const useStyles = makeStyles(styles);

const FootageSubCollection = ({
    footageData, heading,
}) => {
    const [ isExpand, setIsExpand ] = useState(true); // use for when click on video it will expand
    const [ isIndex, setisIndex ] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const videoRef = useRef([]);
    const { isTabletDevice } = useDeviceTypeHook();
    const classes = useStyles();

    // When you click on video then div will expand
    const handleExpand = (index) => {
        setisIndex(index);
        setIsExpand(true);
        if (videoRef.current[ index ].paused) {
            // Play the video
            setIsPlaying(true);
            videoRef.current[ index ]?.play();
        } else {
            // Pause the video
            setIsPlaying(false);
            videoRef?.current?.[ index ]?.pause();
        }

        // previous video pause when click on next video.
        if (document && typeof document !== 'undefined') {
            document.addEventListener('play', (e) =>  {
                const videos = document.getElementsByTagName('video');
                for (let i = 0, len = videos.length; i < len; i += 1) {
                    if (videos?.[ i ] !== e.target) {
                        videos?.[ i ]?.pause();
                        videos?.[ i ]?.load();
                    }
                }
            }, true);
        }
    };

    // video player render
    const videoPlayer = () => (
        footageData?.map((item, index) => (
            <div
                key={item}
                role="presentation"
                onMouseEnter={(event) => { handleExpand(index, event); }}
                onMouseLeave={(event) => { handleExpand(index, event); }}
                className={`${ classes.slider }  ${ isExpand && index === isIndex ? classes.expandWidth : '' }`}
            >
                <Link
                    key={item}
                    href={item?.link?.href || '/'}
                    as={item?.link?.href || '/'}
                    prefetch={false}
                    passHref
                >
                    <a className={classes.InnerMainWrapper}>
                        <video
                            ref={(element) => { videoRef.current[ index ] = element; }}
                            controls={false}
                            loop={false}
                            autoPlay={false}
                            muted
                            id="video"
                            className={`${ classes.videoPlayer  } ${ isExpand && index === isIndex ? 'active' : '' }`}
                            poster={item?.optional_image?.url}
                        >
                            <source
                                type="video/mp4"
                                src={item?.file ? item?.file?.url : item?.video?.url}
                            />
                            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />

                        </video>

                        <div className={classes.playIcon}>
                            {isPlaying && isExpand && index === isIndex ? <PauseCircleOutline /> : <PlayCircleOutline /> }
                        </div>
                        {item?.title && <div className={`${ classes.footageTitle } ${ isExpand && index === isIndex ? classes.expandFootageTitle : '' }`}>{item?.title}</div>}
                    </a>
                </Link>
            </div>

        )));

    return (
        <div className={classes.mainFootageContainer}>
            <div className={classes.headingContainer}>
                <div className={classes.heading}>
                    <ReactMarkdown
                        children={heading}
                        rehypePlugins={[ rehypeRaw ]}
                        remarkPlugins={[ remarkGfm ]}
                    />
                </div>
            </div>
            <div className={classes.outerContainer}>
                {isTabletDevice
                    ? (
                        <Slider
                            dots={false}
                            speed={150}
                            arrows={false}
                            infinite={false}
                            slidesToShow={3}
                            slidesToScroll={1}
                            className={`carousel-container ${ classes.subCollectionSlider }`}
                            responsive={[
                                {
                                    breakpoint: 960,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        swipeToSlide: true,
                                        infinite: false,
                                    },
                                },
                                {
                                    breakpoint: 680,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        swipeToSlide: true,
                                        infinite: false,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1.5,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        swipeToSlide: true,
                                        infinite: false,
                                    },
                                },
                            ]}
                        >
                            {videoPlayer()}
                        </Slider>
                    )

                    : videoPlayer()}
            </div>
        </div>
    );
};

export default FootageSubCollection;
