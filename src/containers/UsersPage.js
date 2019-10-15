import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addUser} from '../redux/actions/userActions';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';
import axios from 'axios';

const UsersPage = ({addUser, users}) => {
    const [userName, setUserName] = useState('');
    const [placeholder, setPlaceholder] = useState('Enter Github Username . . .');

    const onChange = e => setUserName(e.target.value);

    const onSave = e => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${userName}`)
            .then(result => {
                setPlaceholder('Enter Github Username . . .');
                addUser(result.data);
            })
            .catch(() => setPlaceholder('User not found'))
        setUserName('');
    }

    return (
        <userpage>
            <UserList users={users}/>
            <AddUser 
                userName={userName} 
                onChange={onChange} 
                onSave={onSave}
                placeholder={placeholder}/>
        </userpage>
    );
}

export default connect(null, {addUser})(UsersPage);
