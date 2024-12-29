import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';

const MusicSearchResultView = dynamic(
    () => import('@views/MusicSearchResultView/MusicSearchResultView'),
    { ssr: false },
);

const MusicSearchResult = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <MusicSearchResultView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(MusicSearchResult));
