import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { Provider } from 'react-redux';
import storeObj from 'redux/store';
import ThemeWrapper from 'styles/theme/theme';
import { CookiesProvider } from 'react-cookie';

const RootContextProvider = ({
    children,
    appProps,
    cookies = null,
}) => (
    <>
        <CookiesProvider cookies={typeof window !== 'undefined' ? undefined : cookies}>
            <Provider store={storeObj.store}>
                <PersistGate loading={null} persistor={storeObj.persistor}>
                    {() => (
                        <ThemeWrapper appProps={appProps}>
                            {children}
                        </ThemeWrapper>
                    )}
                </PersistGate>
            </Provider>
        </CookiesProvider>
    </>
);

export default RootContextProvider;
