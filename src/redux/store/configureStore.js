import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}