import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import styles from './layout/SliderSlick.styles.default';

const useStyles = makeStyles(styles);

const SliderSlick = ({ children }) => {
    const classes = useStyles();
    return (
        <Slider
            dots={false}
            speed={150}
            swipeToSlide
            arrows={false}
            infinite
            slidesToShow={4}
            slidesToScroll={1}
            className={`carousel-container ${ classes.sliderWrapper }`}
            responsive={[
                {
                    breakpoint: 1341,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        swipeToSlide: true,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        swipeToSlide: true,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 424,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        swipeToSlide: true,
                        infinite: true,
                    },
                },
            ]}
        >
            {children}
        </Slider>
    );
};

export default SliderSlick;
