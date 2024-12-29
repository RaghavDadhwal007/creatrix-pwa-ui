import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/TestimonialPanel.styles.default';

const useStyles = makeStyles(styles);

const TestimonialPanel = ({
    panelData,
}) => {
    // render the style from the CMS
    const testimonialStyle = {
        fontColor: panelData?.testimonial_style?.copy_color,
        fontSize: panelData?.testimonial_style?.copy_font_size,
        Alignment: panelData?.testimonial_style?.copy_alignment,
    };

    const classes = useStyles(testimonialStyle);

    return (
        <div className={classes.panelContainer}>
            <div className={classes.panelMainContainer}>
                <div className={classes.innerPanelContainer}>
                    <div className={classes.imageBlock}>
                        <Image src={panelData?.customer_image?.url} alt={panelData?.author_name} layout="responsive" height={30} width={30} />
                    </div>
                    <div className={classes.contentBox}>
                        <div className={classes.authorName}>{panelData?.author_name}</div>
                        <div>{panelData?.designation}</div>
                        <div className={classes.subCopyContainer}>
                            <div className={classes.svgIcon}>
                                <Image src={panelData?.svg_icon?.url} alt={panelData?.svg_icon?.title} layout="responsive" height={30} width={30} />
                            </div>
                            <div className={classes.subCopyInner}>
                                {ReactHTMLParser(panelData?.copy)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialPanel;
