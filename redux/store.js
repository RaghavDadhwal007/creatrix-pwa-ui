import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';
import reduxPersist from './reduxPersist';

const initMiddleware = [];
let composeEnhancer = compose;

if (typeof window !== 'undefined') {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(applyMiddleware(...initMiddleware));

const {
    persistedReducer,
} = reduxPersist({
    rootReducer,
});

const store = createStore(persistedReducer, {}, middleware);
const persistor = persistStore(store);
const storeObj = { store, persistor };

export default storeObj;
