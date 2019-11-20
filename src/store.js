import React, { createContext, useReducer, useContext } from 'react';
import userReducer, { userInitialState } from './reducers/userReducer';

export const Store = createContext();

export const StoreProvider = ({ children }) =>
    <Store.Provider value={useReducer(userReducer, userInitialState)}>
        {children}
    </Store.Provider>;

export const useStore = () => useContext(Store);

