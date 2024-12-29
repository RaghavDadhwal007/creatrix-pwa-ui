import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/UnlimitedCreative.style.default';

const useStyles = makeStyles(styles);

const UnlimitedCreativeBlock = ({
    data,
}) => {
    if (!data) return null;

    const creativeBlockData = data?.[ 0 ];

    // use for styling handle from CMS
    const styleObj = {
        headingFontSize: creativeBlockData?.heading_style?.font_size,
        headingFontColor: creativeBlockData?.heading_style?.font_color,
        rightHeadingFontSize: creativeBlockData?.right_heading_style?.font_size,
        rightFontColor: creativeBlockData?.right_heading_style?.font_color,
        copyFontSize: creativeBlockData?.copy_style?.font_size,
        copyFontColor: creativeBlockData?.copy_style?.font_color,
    };

    const classes = useStyles(styleObj);

    return (
        <div className={classes.mainCreativeBlock}>
            <div className={classes.imageBlock}>
                <div className={classes.mainHeading}>
                    {creativeBlockData?.heading}
                </div>
                <div className={classes.imageInner}>
                    <div>
                        <Image
                            alt="image"
                            src={creativeBlockData?.image?.url}
                            layout="responsive"
                            width={300}
                            height={250}
                        />
                    </div>
                    <div className={classes.rightHeading}>
                        {creativeBlockData?.right_heading}
                    </div>
                </div>
            </div>
            <div className={classes.copyBlock}>
                <div className={classes.innerBlock}>
                    <div className={classes.svgIcon}>
                        <Image
                            alt="image"
                            src={creativeBlockData?.svg_icon?.url}
                            layout="responsive"
                            width={30}
                            height={30}
                        />
                    </div>
                    {ReactHTMLParser(creativeBlockData?.copy)}
                </div>
            </div>
        </div>
    );
};

export default UnlimitedCreativeBlock;
