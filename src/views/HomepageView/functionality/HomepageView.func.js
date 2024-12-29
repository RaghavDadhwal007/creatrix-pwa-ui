import graphqlQueries from 'graphql/queries';
import useAppInitializer from 'hooks/appInitializerHook';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useCustomQuery } from 'hooks/customGqlHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import { useEffect } from 'react';
import config from '../../../../config';

const useHomepageView = ({
    url,
}) => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const { currentViewport } = useDeviceTypeHook();
    const device = currentViewport === 'mobile' ? 'mobile' : 'desktop';
    const {
        createCustomABTestingEvent,
        removeCustomABTestingEvent,
    } = useAppInitializer();

    const {
        data: homePageCmsData, loading,
    } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_HOMEPAGE,
        variables: {
            environment: config.environment,
            url,
            device,
            refs: [ 'blocks.hero_banner.reference', 'blocks.hero_banner.reference.search_widget.reference', 'blocks.hero_banner.reference.utility_banner.reference', 'blocks.banner.reference', 'blocks.2_up.module_blocks.creative_block', 'blocks.2_up.module_blocks.faq_block', 'blocks.testimonial.reference', 'blocks.music_collection.reference' ],
        },
    });
    useEffect(() => {
        createCustomABTestingEvent();

        return () => {
            removeCustomABTestingEvent();
        };
    }, []);

    return {
        handleRedirect,
        homePageCmsData,
        homePageLoading: loading,
    };
};

const HomepageViewFunc = { useHomepageView };

export default HomepageViewFunc;
