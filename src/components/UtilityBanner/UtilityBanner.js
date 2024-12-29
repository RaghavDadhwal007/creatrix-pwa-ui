import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import Glassmorphism from '@components/Glassmorphism/Glassmorphism';
import styles from './layout/UtilityBanner.style.default';

const useStyles = makeStyles(styles);

const UtilityBanner = ({
    data,
    children,
}) => {
    const overlayBanner = data?.margin?.unit === 'pixel' ? 'px' : '%';
    const marginTop = `${ data?.margin?.top ? data?.margin?.top + overlayBanner : 'auto' }`;
    const marginBottom = `${ data?.margin?.bottom ? data?.margin?.bottom + overlayBanner : 'auto' }`;
    const marginLeft = `${ data?.margin?.left ? data?.margin?.left + overlayBanner : 'auto' }`;
    const marginRight = `${ data?.margin?.right ? data?.margin?.right + overlayBanner : 'auto' }`;

    // styling for overlay banner
    const overLayStyle = {
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
    };

    const classes = useStyles(overLayStyle);

    if (Object.entries(data).length <= 0) {
        return null;
    }

    return (
        // move this inline style in css function for future
        <Glassmorphism>
            <div className={classes.mainContainer}>
                <div className={classes.UtilityBannerMain} style={overLayStyle}>
                    <div className={classes.innerBanner}>
                        {data?.utility_block?.map((item) => (
                            <div className={classes.imageItemWrapper} key="1">
                                <div className={classes.imageItem}>
                                    <div className={classes.image}>
                                        <Image
                                            src={item?.image?.url}
                                            alt={ReactHTMLParser(item?.heading)}
                                            height="60px"
                                            width="60px"
                                        />
                                    </div>
                                </div>
                                <div className={classes.featureHeadWrapper}>
                                    <div className={classes.featureHeading}>
                                        {ReactHTMLParser(item?.heading)}
                                    </div>
                                    <div className={classes.featureSubcopy}>
                                        {ReactHTMLParser(item?.copy)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {children}
        </Glassmorphism>
    );
};

export default UtilityBanner;
