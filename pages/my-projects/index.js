import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';

const MyProjectsPageView = dynamic(
    () => import('@views/MyProjectsPageView/MyProjectsPageView'),
    { ssr: false },
);

const MyProjects = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <MyProjectsPageView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(MyProjects));
