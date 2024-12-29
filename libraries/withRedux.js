import { applyMiddleware, compose, createStore } from 'redux';
import nextReduxWrapper from 'next-redux-wrapper';
import rootReducer from '../redux/reducers/index';

const initMiddleware = [];
const composeEnhancer = compose;

export function configureStore(initialState = {}) {
    const middleware = composeEnhancer(applyMiddleware(...initMiddleware));

    const store = createStore(
        rootReducer,
        initialState,
        middleware,
    );

    return store;
}

const functionWithReducer = (BaseComponent) => nextReduxWrapper(configureStore)(BaseComponent);

export default functionWithReducer;
