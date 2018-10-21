import * as types from './userTypes';

export function addUser (user) {
    return {type: types.ADD_USER, user}
}

export function filterUser (user) {
    return {type: types.FILTER_USER, user}
}