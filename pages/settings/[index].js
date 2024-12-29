import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import dynamic from 'next/dynamic';
import AppWrapper from 'src/layouts/AppWrapper/AppWrapper';

const SettingView = dynamic(
    () => import('src/views/SettingViews'),
    { ssr: false },
);
const Settings = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <RootContextProvider appProps={appProps} cookies={cookies}>
        <AppWrapper route={route}>
            <SettingView />
        </AppWrapper>
    </RootContextProvider>
);

export default withReducer(withApollo({ ssr: true })(Settings));
