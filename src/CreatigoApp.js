import React from 'react';
import Routes from './Routes';

const CreatigoApp = ({
    appProps = {}, route = '', staticPage = null, cookies = null,
}) => (
    <>
        <Routes appProps={appProps} route={route} staticPage={staticPage} cookies={cookies} />
    </>
);

export default CreatigoApp;
