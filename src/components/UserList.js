import React, { memo } from 'react';
import User from './User';

const UserList = memo(({ users }) => {
    return (
        <div className='addUserLayout'>
            {users.map((user, index) =>
                <User key={index.toString()} {...user} />
            )}
        </div>
    );
});

export default UserList;
