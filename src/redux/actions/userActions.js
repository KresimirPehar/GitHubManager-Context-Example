import * as types from './userTypes';

export const addUser = user => ({
    type: types.ADD_USER,
    user
});

export const filterUser = user => ({
    type: types.FILTER_USER,
    user
});