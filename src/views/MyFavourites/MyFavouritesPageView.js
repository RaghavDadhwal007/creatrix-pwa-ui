import CardAudio from '@components/Cards/CardAudio/CardAudio';
import CardVideo from '@components/Cards/CardVideo/CardVideo';
import SliderSlick from '@components/SliderSlick/SliderSlick';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyFavouritesSkeleton from '@views/Skeleton/MyFavouritesSkeleton/MyFavouritesSkeleton';
import assets from 'assets';
import withTokenWrapper from 'hooks/withTokenWrapperHook';
import Image from 'next/image';
import useMyFavourites from './functionality/MyFavoritesView.func';
import styles from './layout/MyFavouritesPage.default.styles';

const useStyles = makeStyles(styles);

const MyFavouritesPageView = () => {
    const classes = useStyles();
    const {
        images: {
            homePageAudioPlaceHolders,
            favourite,
        },
    } = assets;

    const { myFavouriteData, loading } = useMyFavourites();

    return (
        <div className={classes.mainWrapper}>
            {loading ? (
                <MyFavouritesSkeleton length={8} xs={3} lg={3} />
            ) : (
                <div>
                    {myFavouriteData?.[ 0 ]?.totalAssets
                        ? (
                            <div className={classes.noDataFoundWrapper}>
                                <div className={classes.noDataFoundImageWrapper}>
                                    <Image
                                        src={favourite}
                                        alt="No favourites found"
                                        layout="responsive"
                                        height={400}
                                        width={400}
                                    />
                                </div>
                                <div className={`${ classes.headingWrapper }`}>
                                    <Typography className={classes.heading}>No favourites found</Typography>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                <div>
                                    <div className={`${ classes.headingWrapper } firstChild`}>
                                        <Typography className={classes.heading}>Footage</Typography>
                                    </div>
                                    <Grid container className={classes.CardWrapper}>
                                        <SliderSlick>
                                            {homePageAudioPlaceHolders?.map((item) => (
                                                <div key="1" className={classes.slider}>
                                                    <CardVideo item={item} />
                                                </div>
                                            ))}
                                        </SliderSlick>
                                    </Grid>
                                </div>
                                <div className={classes.headingWrapper}>
                                    <Typography className={classes.heading}>Music</Typography>
                                </div>
                                <div>

                                    {[  1, 2, 3, 4, 5, 6, 7, 8 ].map((item) => (
                                        <div key="1" className={classes.audioCardWrapper}>
                                            <CardAudio
                                                item={item}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};

export default withTokenWrapper(MyFavouritesPageView);
