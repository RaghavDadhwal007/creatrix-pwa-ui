import { makeStyles } from '@mui/styles';
import Typography from '@components/Typography/Typography';
import Image from 'next/image';
import FootageSubCollection from '@components/FootageSubCollection/FootageSubCollection';
import styles from './layout/WhyCreatigo.styles.default';

const useStyles = makeStyles(styles);

const WhyCreatigo = ({ whyCreatigoBlock }) => {
    const classes = useStyles();

    return (
        <div className={classes.whyCreatigoblockWrapper}>
            <FootageSubCollection footageData={whyCreatigoBlock?.creatigo_block?.video_block} heading={whyCreatigoBlock?.heading} />
            <div className={classes.whyCreatigoBlock}>
                <div className={classes.svgIcon}>
                    <Image
                        src={whyCreatigoBlock?.creatigo_block?.svg_icon.url}
                        alt="Card Image"
                        layout="responsive"
                        height={20}
                        width={20}
                    />
                </div>
                <Typography type="sub-title1">
                    {whyCreatigoBlock?.creatigo_block?.copy}
                </Typography>
            </div>
        </div>
    );
};

export default WhyCreatigo;
