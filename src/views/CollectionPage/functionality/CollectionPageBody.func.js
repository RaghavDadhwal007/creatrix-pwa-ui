import graphqlQueries from 'graphql/queries';
import { useCustomQuery } from 'hooks/customGqlHook';
import config from '../../../../config';

const useCollectionPageBodyHook = ({
    typeCollection,
    codeCollection,
}) => {
    const { data, loading } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_COLLECTION_BY_ASSETS,
        variables: {
            environment: config.environment,
            pageNumber: 1,
            pageSize: 20,
            contentType: typeCollection,
            collectionName: codeCollection,
        },
    });

    const collectionAssetsData = data?.findCollectionByAssets;

    return {
        collectionAssetsData,
        loading,
    };
};
const useCollectionPageBodyFunc = {
    useCollectionPageBodyHook,
};

export default useCollectionPageBodyFunc;
