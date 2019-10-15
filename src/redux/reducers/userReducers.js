import * as types from '../actions/userTypes';

const initialState = {
    user: [{
        avatar_url: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
        name: 'Krešimir Pehar',
        location: 'Split, Croatia'
    }],
    filteredUser: [{
        avatar_url: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
        name: 'Krešimir Pehar',
        location: 'Split, Croatia'
    }]
}

const addUser = (state, action) => ({
    ...state,
    user: [
        ...state.user, action.user
    ],
    filteredUser: [
        ...state.user, action.user
    ]
})

const filterUsers = (state, action) => ({
    ...state,
    filteredUser: state.user.filter(user => user.name.toLowerCase().includes(action.user.toLowerCase()))
})

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER:
            return addUser(state, action);
        case types.FILTER_USER:
            return filterUsers(state, action);
        default:
            return state;
    }
}

export default userReducer;
