import graphqlQueries from 'graphql/queries';
import { useQueryHook } from 'hooks/customGqlHook';
import { useEffect } from 'react';
import config from '../../../../config';

const useGeneralSupportHook = () => {
    const {
        handleAction: getContentPageData, data, loading,
    } = useQueryHook({
        query: graphqlQueries.contentStackQueries.FIND_CONTENT_DATA,
    });

    useEffect(() => {
        getContentPageData({
            variables: {
                contentType: 'general_support',
                environment: config.environment,
                refs: [ 'faq_block.reference' ],
            },
        });
    }, []);

    const findContentData = data?.findContent?.content?.entries?.[ 0 ];

    return {
        content: findContentData,
        loading,
    };
};

const GeneralSupportFunc = { useGeneralSupportHook };

export default GeneralSupportFunc;
