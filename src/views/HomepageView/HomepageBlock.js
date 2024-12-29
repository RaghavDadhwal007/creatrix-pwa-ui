import BannerHero from '@components/BannerHero/BannerHero';
import HeroBannerContainer from '@components/HeroBannerContainer/HeroBannerContainer';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import useCheckout from '@views/CheckoutView/functionality/CheckoutView.func';
import TwoUpHomeBlock from '@views/2UpHomeBlock/TwoUpHomeBlock';
import ChooseYourPlanLayout from 'src/layouts/ChooseYourPlanLayout/ChooseYourPlan';
import Testimonials from '@components/Testimonials/Testimonials';
import StandardCollection from '@components/Cards/CardVideoHome/StandardCollection';
import FootageSubCollection from '@components/FootageSubCollection/FootageSubCollection';
import StandardMusicCollection from '@components/Cards/CardAudioHome/StandardMusicCollection';
import styles from './layout/Homepage.styles.default';

const useStyles = makeStyles(styles);

const HomepageBlock = ({
    block,
}) => {
    const classes = useStyles();

    const blockKey = Object.keys(block)[ 0 ];
    const blockObj = block[ blockKey ];
    const { handleCheckout } = useCheckout();

    switch (blockKey) {
        case 'hero_banner':
            return (
                <HeroBannerContainer data={block} />
            );
        case 'footage_collection':
            return (
                <FootageSubCollection footageData={blockObj?.footage_block} heading={blockObj?.title} />
            );
        case 'static_collection':
            return (
                <StandardCollection data={blockObj} />
            );

        case 'music_collection':
            return <StandardMusicCollection data={blockObj} />;

        case 'subscription_module':
            if (blockObj?.widget === '[Subscription]') {
                return (
                    <div className={classes.SubscriptionBlockWrapper}>
                        <div className={classes.blockWrapper}>
                            <Typography type="heading-2" className={classes.blockHeading}>
                                {blockObj?.title}
                            </Typography>
                        </div>
                        <ChooseYourPlanLayout handleCheckout={handleCheckout} />
                    </div>
                );
            }
            return null;

        case 'banner':
            return (
                <BannerHero data={blockObj?.reference?.[ 0 ]} />
            );
        case '2_up':
            return (
                <TwoUpHomeBlock data={blockObj?.module_blocks} />
            );
        case 'testimonial':
            return (
                <Testimonials data={blockObj?.reference?.[ 0 ]} />
            );

        default:
            return null;
    }
};

export default HomepageBlock;
