import React, { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {};
const reducer = {};

export const StoreProvider = ({ child }) =>
    <Store.Provider value={useReducer(reducer, initialState)}>
        {child}
    </Store.Provider>;

