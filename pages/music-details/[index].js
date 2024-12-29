import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';
import withReducer from 'libraries/withRedux';
import withApollo from 'libraries/withApollo';

const MusicDetailsPageView = dynamic(
    () => import('@views/MusicDetailsView/MusicDetailsView'),
    { ssr: false },
);

const MusicDetails = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <MusicDetailsPageView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(MusicDetails));
