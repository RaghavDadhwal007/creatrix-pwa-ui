import graphqlQueries from 'graphql/queries';
import { useQueryHook } from 'hooks/customGqlHook';
import { useEffect } from 'react';
import config from '../../../../config';

const useContentPageHook = ({
    contentType,
    url,
}) => {
    const {
        handleAction: getContentPageData, data, loading,
    } = useQueryHook({
        query: graphqlQueries.contentStackQueries.FIND_CONTENT_DATA,
    });

    useEffect(() => {
        getContentPageData({
            variables: {
                contentType,
                environment: config.environment,
                // eslint-disable-next-line
                query: `{\"url\": \"${ url }\"}`,
                refs: [ 'center_block.faq.reference' ],
            },
        });
    }, []);

    const findContentData = data?.findContent?.content?.entries?.[ 0 ];

    return {
        content: findContentData,
        title: findContentData?.title,
        isLoading: loading,
    };
};

const ContentPageFunc = {
    useContentPageHook,
};

export default ContentPageFunc;
