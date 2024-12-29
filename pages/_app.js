import React from  'react';
import { useRouter } from 'next/router';
import  '../styles/globals.css';

function MyApp({ Component, pageProps, appProps }) {
    const router = useRouter();
    return (
        <Component {...pageProps} {...appProps} key={router.asPath} />
    );
}

export default MyApp;
