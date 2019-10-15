import React from 'react';
import User from './User';

const UserList = ({users}) => {
    return (
        <div className='addUserLayout'>
            {users.map((user, index) => 
                <User key={index} {...user}/>
            )}
        </div>
    );
}

export default UserList;
