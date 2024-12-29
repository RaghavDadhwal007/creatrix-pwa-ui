import graphqlQueries from 'graphql/queries';
import { useCustomQuery } from 'hooks/customGqlHook';
import config from '../../../../config';

const useFootageDetails = ({
    videoUrl = '',
}) => {
    const tagsArray = [ 'Couple', 'Man', 'Woman', 'Beach', 'Water', 'Love', 'Romance', 'Summeer', 'Sun', 'Sand', 'Sunset', 'Dusk' ];

    const { data, loading } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_VIDEO_PAGE,
        variables: {
            environment: config.environment,
            url: videoUrl,
        },
    });
    return {
        tagsArray,
        loading,
        videoData: data?.getVideoPage?.content,
    };
};

export default useFootageDetails;
