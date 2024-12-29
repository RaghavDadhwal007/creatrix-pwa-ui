import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import CollectionContainer from '@views/CollectionPage/CollectionContainer';
import ContentPage from '@views/ContentPage/ContentPage';
import FootageDetailsView from '@views/FootageDetailsView/FootageDetailsView';
import HomepageView from '@views/HomepageView/HomepageView';
import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import graphqlQueries from 'graphql/queries';
import { useCustomQuery } from 'hooks/customGqlHook';
import ErrorPage from 'src/layouts/ErrorPage/ErrorPage';
import useThemeHook from 'styles/theme/functionality/Theme.func';
import config from '../config';
import AppWrapper from './layouts/AppWrapper/AppWrapper';

const AppLoader = ({
    appProps = {}, route = '', staticPage = null, cookies = null,
}) => {
    const { data, loading } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_URL_QUERY,
        variables: { environment: config.environment, url: route },
    });
    const { getCMSThemeData } = useThemeHook();
    const { loadFonts: fonts } = getCMSThemeData();

    const seoObj = data?.findUrl?.content?.entries?.[ 0 ]?.seo;

    if (staticPage && staticPage.Component) {
        const { Component } = staticPage;
        return <Component />;
    }
    return (
        <>
            <RootContextProvider appProps={appProps} cookies={cookies}>
                <AppWrapper route={route}>
                    <>
                        <DocumentHeader
                            data={
                                seoObj
                            }
                            loadFonts={fonts}
                            defaultTitle=""
                        />
                        {data?.findUrl?.content?.entries?.length > 0 ? data?.findUrl?.content?.entries?.map((item) => {
                            switch (item?.content_type) {
                                case 'homepage':
                                    return <HomepageView contentType={item?.content_type} url={item?.url} />;
                                case 'content_page':
                                    return (
                                        <ContentPage contentType={item?.content_type} url={item?.url} />
                                    );
                                case 'collections':
                                    return (
                                        <CollectionContainer contentType={item?.content_type} path={item?.url} />
                                    );
                                case 'videos':
                                    return (
                                        <FootageDetailsView contentType={item?.content_type} path={item?.url} />
                                    );
                                default:
                                    return <ErrorPage />;
                            }
                        })
                            : !loading && (<ErrorPage />)}
                    </>
                </AppWrapper>
            </RootContextProvider>
        </>
    );
};

export default AppLoader;
