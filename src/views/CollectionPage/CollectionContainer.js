import { makeStyles } from '@mui/styles';
import CollectionPageBody from './CollectionPageBody';
import useStandardCollectionFunc from './functionality/CollectionContainer.func';
import styles from './layout/CollectionContainer.styles.default';

const useStyles = makeStyles(styles);

const CollectionContainer = ({
    path,
    contentType,
}) => {
    const { useStandardCollectionHook } = useStandardCollectionFunc;
    const { collectionData, isLoading } = useStandardCollectionHook({
        path,
    });
    const classes = useStyles();
    return (
        isLoading
            ? <>Loading....</>
            : (
                <div className={classes.mainCollectionContainer}>
                    <CollectionPageBody categoryData={collectionData} contentType={contentType} />
                </div>
            )
    );
};

export default CollectionContainer;
