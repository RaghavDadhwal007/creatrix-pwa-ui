import HeroBanner from '@components/HeroBanner/HeroBanner';
import { makeStyles } from '@mui/styles';
import VideoPlayer from '@components/VideoPlayer/VideoPlayer';
import UtilityBanner from '@components/UtilityBanner/UtilityBanner';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import styles from './layout/HeroBannerContainer.styles.default';

const useStyles = makeStyles(styles);

const HeroBannerContainer = ({
    data,
}) => {
    const classes = useStyles({ styles: data?.hero_banner?.reference?.[ 0 ] });
    const { isMobile } = useDeviceTypeHook();
    return (
        <>
            {isMobile ? (
                <>
                    <div className={`${ classes.heroBannerWrapper } ${ 'image' }`}>
                        {data?.hero_banner?.reference?.[ 0 ]?.hero_images?.[ 0 ]?.mobile_media?.content_type?.includes('video') && <VideoPlayer videoUrl={data?.hero_banner?.reference?.[ 0 ]?.hero_images?.[ 0 ]?.mobile_media?.url} asBackground muted autoPlay /> }
                        <div className={classes.heroBanner}>
                            <HeroBanner
                                data={data?.hero_banner?.reference?.[ 0 ]}
                            />
                        </div>
                    </div>
                    { data?.hero_banner?.reference[ 0 ]?.utility_banner?.is_showing_banner && <UtilityBanner data={data?.hero_banner?.reference[ 0 ]?.utility_banner?.reference[ 0 ]} />}
                </>
            ) : (
                <div className={`${ classes.heroBannerWrapper } ${ 'image' }`}>
                    {data?.hero_banner?.reference?.[ 0 ]?.hero_images?.[ 0 ]?.file?.content_type?.includes('video') && <VideoPlayer videoUrl={data?.hero_banner?.reference?.[ 0 ]?.hero_images?.[ 0 ]?.file?.url} asBackground muted autoPlay /> }
                    <div className={classes.heroBanner}>
                        <HeroBanner
                            data={data?.hero_banner?.reference?.[ 0 ]}
                        />
                    </div>
                    { data?.hero_banner?.reference[ 0 ]?.utility_banner?.is_showing_banner && <UtilityBanner data={data?.hero_banner?.reference[ 0 ]?.utility_banner?.reference[ 0 ]} />}
                </div>
            )}
        </>
    );
};

export default HeroBannerContainer;
