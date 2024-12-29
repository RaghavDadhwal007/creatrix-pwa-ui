import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';

const SearchResultView = dynamic(
    () => import('@views/SearchResultView/SearchResultView'),
    { ssr: false },
);

const AllProjects = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <SearchResultView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(AllProjects));
