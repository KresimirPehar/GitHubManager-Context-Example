import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/index';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(reduxImmutableStateInvariant())
    );
};

export default configureStore;