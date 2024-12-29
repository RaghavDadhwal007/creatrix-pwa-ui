import graphqlQueries from 'graphql/queries';
import { useCustomQuery } from 'hooks/customGqlHook';
import config from '../../../../config';

const useStandardCollectionHook = ({
    path,
}) => {
    const { data, loading } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_CATEGORY_BY_URL,
        variables: { environment: config.environment, url: path },
    });
    const collectionData = data?.findCollectionByUrl?.content?.entries?.[ 0 ];

    return {
        collectionData,
        loading,
    };
};
const useStandardCollectionFunc = {
    useStandardCollectionHook,
};

export default useStandardCollectionFunc;
