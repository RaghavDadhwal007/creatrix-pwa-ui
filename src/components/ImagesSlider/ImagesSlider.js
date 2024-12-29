import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { DraggableCore } from 'react-draggable';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import styles from './layout/ImagesSlider.styles.default';

const useStyles = makeStyles(styles);

export const SliderItem = ({ children }) => {
    const classes  = useStyles();
    return (
        <div className={classes.carouselItem}>
            {children}
        </div>
    );
};

const ImagesSlider = ({ children, noOfImages }) => {
    const classes = useStyles();
    const { isLaptopDevice, isTabletDevice } = useDeviceTypeHook();
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ sliderPosition, setSliderPosition ] = useState({ x: 0 });

    const sliderWidth = 780 / (3);

    const trackPos = (data) => {
        if (isTabletDevice) {
            if (data.x > -1 && data.x < 380) {
                setSliderPosition({ x: data.x });
                const newIndex = (data.x * (noOfImages - 4)) / 380;
                setActiveIndex(newIndex);
            }
        } else if (isLaptopDevice) {
            if (data.x > -1 && data.x < 632) {
                setSliderPosition({ x: data.x });
                const newIndex = (data.x * (noOfImages - 4)) / 632;
                setActiveIndex(newIndex);
            }
        } else if (data.x > -1 && data.x < 1052) {
            setSliderPosition({ x: data.x });
            const newIndex = (data.x * (noOfImages - 4)) / 1052;
            setActiveIndex(newIndex);
        }
    };

    const updateIndex = (newIndex) => {
        if (newIndex > noOfImages - 4) {
            setActiveIndex(noOfImages - 4);
            if (isTabletDevice) {
                setSliderPosition({ x: 380 });
            } else if (isLaptopDevice) {
                setSliderPosition({ x: 632 });
            } else {
                setSliderPosition({ x: 1052 });
            }
            return;
        }
        setActiveIndex(newIndex);
        if (newIndex < 0) {
            setActiveIndex(0);
            setSliderPosition({ x: 0 });
            return;
        }
        let newPos;
        if (isLaptopDevice) {
            newPos = (632 / (noOfImages - 4)) * newIndex;
        } else if (isTabletDevice) {
            newPos = (380 / (noOfImages - 4)) * newIndex;
        } else {
            newPos = (1052 / (noOfImages - 4)) * newIndex;
        }
        setSliderPosition({ x: newPos });
    };

    return (
        <div>
            <div className={classes.carousel}>
                <div
                    className={classes.inner}
                    style={{
                        transform: `translateX(-${ activeIndex * 25 }%)`,
                        transition: 'transform 0.5s',
                    }}
                >
                    {React.Children.map(children, (child) => (
                        React.cloneElement(child)
                    ))}
                </div>
                <ChevronLeftIcon onClick={() => updateIndex(activeIndex - 1)} className={classes.leftIcon} />
                <ChevronRightIcon onClick={() => updateIndex(activeIndex + 1)} className={classes.rightIcon} />
            </div>
            <div className={classes.sliderRoot}>
                <div className={classes.sliderBg} />
                <DraggableCore
                    axis="x"
                    onDrag={(e, data) => trackPos(data)}
                    onStart={(e, data) => trackPos(data)}
                >
                    <div
                        className={classes.slider}
                        style={{
                            transform: `translate(${ sliderPosition.x }px)`,
                            // transition: 'transform 0.8s',
                            width: sliderWidth,
                        }}
                    />
                </DraggableCore>
            </div>
        </div>
    );
};

export default ImagesSlider;
