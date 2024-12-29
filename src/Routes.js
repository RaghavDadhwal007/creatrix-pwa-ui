import AppLoader from './AppLoader';

const Routes = ({
    appProps = {}, route = '', staticPage = null, cookies = null,
}) => (
    <AppLoader appProps={appProps} route={route} staticPage={staticPage} cookies={cookies} />
);

export default (Routes);
