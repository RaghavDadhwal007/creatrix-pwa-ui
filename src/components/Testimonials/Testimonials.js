import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import styles from './layout/Testimonials.styles.default';
import TestimonialPanel from './TestimonialPanel';

const useStyles = makeStyles(styles);

const Testimonials = ({
    data,
}) => {
    if (!data) return null;

    const testimonialBlock = data?.testimonial_block || [];

    // render the style from the CMS
    const styleObj = {
        headingFontSize: data?.heading_style?.font_size,
        headingFontColor: data?.heading_style?.color,

    };
    const classes = useStyles(styleObj);
    const productShowBasedOnLength = testimonialBlock?.length <= 4 ? testimonialBlock?.length : 4;
    return (
        <Grid container className={classes.testimonialContainer}>
            <div className={classes.heading}>
                {data?.heading}
            </div>
            <Grid container className={classes.mainSliderContainer}>
                <Slider
                    dots={false}
                    speed={150}
                    swipeToSlide
                    infinite
                    slidesToShow={productShowBasedOnLength}
                    slidesToScroll={1}
                    className={`carousel-container ${ classes.testimonialSlider }`}
                    responsive={[
                        {
                            breakpoint: 1341,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: false,
                                swipeToSlide: true,
                                infinite: true,
                                variableWidth: true,
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
                                variableWidth: true,
                            },
                        },
                        {
                            breakpoint: 425,
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
                    {testimonialBlock?.map((item) => (
                        <div key={item} className={classes.slider}>
                            <TestimonialPanel panelData={item} />
                        </div>
                    ))}
                </Slider>
            </Grid>

        </Grid>
    );
};

export default Testimonials;
