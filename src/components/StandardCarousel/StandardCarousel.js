import { makeStyles } from '@mui/styles';
import React from 'react';
import { Grid } from '@mui/material';
import SubCollection from '@components/SubCollection/SubCollection';
import Slider from 'react-slick';
import styles from './layout/standardCarousel.styles.default';

const useStyles = makeStyles(styles);

const StandardCarousel = ({ data }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainSliderContainer}>
            <Slider
                dots={false}
                speed={150}
                arrows={false}
                infinite={false}
                slidesToShow={4}
                slidesToScroll={1}
                className={`carousel-container ${ classes.subCollectionSlider }`}
                responsive={[
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            swipeToSlide: true,
                            infinite: false,
                        },
                    },
                    {
                        breakpoint: 580,
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
                {data?.map((item) => (
                    <div key="1" className={classes.slider}>
                        <SubCollection blockItem={item}  />
                    </div>
                ))}
            </Slider>

        </Grid>
    );
};

export default StandardCarousel;
