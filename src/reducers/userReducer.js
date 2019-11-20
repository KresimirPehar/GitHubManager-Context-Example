import { ADD_USER, FILTER_USER, ADD_USER_ERROR } from '../actions/userTypes';

export const userInitialState = {
    user: [{
        avatarUrl: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
        name: 'Krešimir Pehar',
        location: 'Split, Croatia'
    }],
    filteredUser: [{
        avatarUrl: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
        name: 'Krešimir Pehar',
        location: 'Split, Croatia'
    }],
    error: false
};

const addUser = (state, action) => ({
    ...state,
    user: [
        ...state.user, action.user
    ],
    filteredUser: [
        ...state.user, action.user
    ],
    error: false
});

const filterUsers = (state, action) => ({
    ...state,
    filteredUser: state.user.filter(user => user.name.toLowerCase().includes(action.user.toLowerCase()))
});

const userReducer = (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return addUser(state, action);
        case FILTER_USER:
            return filterUsers(state, action);
        case ADD_USER_ERROR:
            return { ...state, error: true };
        default:
            return state;
    }
};

export default userReducer;
