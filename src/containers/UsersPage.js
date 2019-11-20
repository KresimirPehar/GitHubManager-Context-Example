import React, { useState, useEffect } from 'react';
import { addGitHubUser } from '../actions/userActions';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';

const UsersPage = ({ filteredUser, error, dispatch }) => {
    const [userName, setUserName] = useState('');
    const [placeholder, setPlaceholder] = useState('Enter Github Username . . .');

    useEffect(() => {
        if (error) setPlaceholder('User not found');
        else setPlaceholder('Enter Github Username . . .');
    }, [error]);

    const onChange = e => {
        setPlaceholder('Enter Github Username . . .');
        setUserName(e.target.value);
    };

    const onSave = e => {
        e.preventDefault();
        addGitHubUser(dispatch, userName);
        setUserName('');
    };

    return (
        <div id='userPage'>
            <AddUser
                userName={userName}
                onChange={onChange}
                onSave={onSave}
                placeholder={placeholder} />
            <UserList users={filteredUser} />
        </div>
    );
};

export default UsersPage;
