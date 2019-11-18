import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addGitHubUser } from '../redux/actions/userActions';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';

const UsersPage = ({ addGitHubUser, users, userError }) => {
    const [userName, setUserName] = useState('');
    const [placeholder, setPlaceholder] = useState('Enter Github Username . . .');

    useEffect(() => {
        if (userError) setPlaceholder('User not found');
        else setPlaceholder('Enter Github Username . . .');
    }, [userError]);

    const onChange = e => {
        setPlaceholder('Enter Github Username . . .');
        setUserName(e.target.value);
    };

    const onSave = e => {
        e.preventDefault();
        addGitHubUser(userName);
        setUserName('');
    };

    return (
        <div id='userPage'>
            <UserList users={users} />
            <AddUser
                userName={userName}
                onChange={onChange}
                onSave={onSave}
                placeholder={placeholder} />
        </div>
    );
};

export default connect(state => ({ userError: state.users.error }), { addGitHubUser })(UsersPage);
