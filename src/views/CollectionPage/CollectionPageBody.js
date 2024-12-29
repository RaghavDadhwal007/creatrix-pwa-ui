import VideoHoverCard from '@components/Cards/VideoHoverCard/VideoHoverCard';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import routes from '@views/routes';
import CollectionPageSkeleton from '@views/Skeleton/CollectionPageSkeleton/CollectionPageSkeleton';
import helperFunctions from 'helperFunctions';
import CustomNavigationHook from 'hooks/customNavigationHook';
import useCollectionPageBodyFunc from './functionality/CollectionPageBody.func';
import styles from './layout/CollectionPageBody.styles.default';

const useStyles = makeStyles(styles);

const CollectionPageBody = ({
    categoryData,
}) => {
    const typeCollection  = categoryData?.select_collection_type;
    const codeCollection =  categoryData?.collection_code;
    const { useCollectionPageBodyHook } = useCollectionPageBodyFunc;
    const { collectionAssetsData, loading } = useCollectionPageBodyHook({
        typeCollection,
        codeCollection,
    });
    const { isImage, randomHeights } = helperFunctions;
    const collectionArray = collectionAssetsData?.content?.entries;

    const classes = useStyles();
    if (loading) {
        return <CollectionPageSkeleton length={12} xs={3} lg={3} />;
    }
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();

    return (
        <div className={classes.containerPageBody}>
            {categoryData?.title && <Typography type="heading-2">{categoryData?.title || 'Collection Name'}</Typography>}
            {categoryData?.description && <Typography type="caption4">{categoryData?.description}</Typography>}
            {categoryData?.title
            && (
                <Typography className={classes.lengthText} type="caption4">
                    {`${ collectionArray?.length } result${ collectionArray?.length > 1 ? 's' : '' } for ${ categoryData?.title }`}
                </Typography>
            )}

            <div className={classes.gallery}>
                {collectionArray?.map((item) => (
                    <div
                        key={item?.id}
                        aria-hidden="true"
                        onClick={() => handleRedirect(`${ routes.homepage.path }/${ item?.url }`)}
                    >
                        <VideoHoverCard
                            imageUri={item?.thumbnail_section?.cloudinary_thumbnail || item?.thumbnail_section?.optional_thumbnail}
                            duration={
                                Number.parseFloat(item?.duration || '00.0').toFixed(2)
                            }
                            height={randomHeights()}
                            isVideoHoverPlay={!isImage(item?.thumbnail_section?.cloudinary_thumbnail)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionPageBody;
