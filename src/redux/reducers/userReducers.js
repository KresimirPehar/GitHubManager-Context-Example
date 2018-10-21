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

function addUser(state, action) {
    return {
        ...state,
        user: [
            ...state.user, action.user
        ],
        filteredUser: [
            ...state.user, action.user
        ]
    };
}

function filterUsers(state, action) {
    console.log('state:',state)
    return Object.assign({},  state, {
            filteredUser: state.user.filter(user => 
                user.name.toLowerCase().startsWith(action.user.toLowerCase()))    
            });
        }

export default function userReducer (state = initialState, action) {
        switch (action.type) {
            case types.ADD_USER:
                return addUser(state, action);
            case types.FILTER_USER:
                return filterUsers(state, action);
        
            default:
                return state;
        }
}
