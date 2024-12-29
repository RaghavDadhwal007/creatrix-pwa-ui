import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';
import withReducer from 'libraries/withRedux';
import withApollo from 'libraries/withApollo';

const FootageDetailsPageView = dynamic(
    () => import('@views/FootageDetailsView/FootageDetailsView'),
    { ssr: false },
);

const FootageDetails = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <FootageDetailsPageView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(FootageDetails));
