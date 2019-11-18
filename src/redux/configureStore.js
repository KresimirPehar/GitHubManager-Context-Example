import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
};

export default configureStore;