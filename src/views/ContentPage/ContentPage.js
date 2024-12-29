import ImagesSlider, { SliderItem } from '@components/ImagesSlider/ImagesSlider';
import RecomendedFootageCardI from '@components/RecomendedFootageCardI/RecomendedFootageCardI';
import Typography from '@components/Typography/Typography';
import VideoPlayer from '@components/VideoPlayer/VideoPlayer';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FaqPageView from '@views/FaqPageView/FaqPageView';
import ContentPageSkeleton from '@views/Skeleton/ContentpageSkeleton/ContentpageSkeleton';
import assets from 'assets';
import helperFunctions from 'helperFunctions';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ContentPageTabularBlock from 'src/layouts/ContentPageTabularBlock/ContentPageTabularBlock';
import ContentPageFunc from './functionality/ContentPage.func';
import styles from './layout/ContentPage.styles.default';

const useStyles = makeStyles(styles);

const ContentPage = ({
    contentType,
    url,
}) => {
    const { useContentPageHook } = ContentPageFunc;
    const { content, isLoading } = useContentPageHook({
        contentType,
        url,
    });
    const { cmsStyles } = helperFunctions;

    const { images: { musicDetailsPageArr }  } = assets;

    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.commonBlockWrapper}>
                {
                    isLoading
                        ? <ContentPageSkeleton />
                        : content?.center_block?.map((block) => {
                            switch (Object.keys(block)[ 0 ]) {
                                case 'copy':
                                    return (
                                        <Typography className={classes.descriptionWrapper} style={cmsStyles(block?.copy?.copy_style)}>
                                            <ReactMarkdown
                                                children={block?.copy?.copy_}
                                                rehypePlugins={[ rehypeRaw ]}
                                                remarkPlugins={[ remarkGfm ]}
                                            />
                                        </Typography>
                                    );

                                case 'video':
                                    return (
                                        <div className={classes.videoPlayer}>
                                            <VideoPlayer
                                                autoPlay={block?.video?.autoplay}
                                                muted={block?.video?.is_muted}
                                                videoUrl={block?.video?.video_reference?.video_url}
                                                thumbnail={block?.video?.video_reference?.optional_image?.url}
                                            />
                                        </div>
                                    );
                                case 'card_block':
                                    return (
                                        <div className={classes.recomendationWrapper}>
                                            <Typography type="heading-2">{block?.card_block?.title}</Typography>
                                            <ImagesSlider noOfImages={musicDetailsPageArr.length}>
                                                <Grid container flexWrap="nowrap">
                                                    {musicDetailsPageArr.map((item) => (
                                                        <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                                            <SliderItem>
                                                                <RecomendedFootageCardI imageUri={item} />
                                                            </SliderItem>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </ImagesSlider>
                                        </div>
                                    );
                                case 'tabular_block':
                                    return <ContentPageTabularBlock data={block} />;
                                case 'faq':
                                    return <FaqPageView data={block} />;
                                default:
                                    return null;
                            }
                        })
                }
            </div>
        </div>
    );
};

export default ContentPage;
