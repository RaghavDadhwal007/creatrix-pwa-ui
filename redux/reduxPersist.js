// import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reduxPersist = ({
    rootReducer,
}) => {
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [ 'userState' ],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return {
        persistedReducer,
    };
};

export default reduxPersist;
