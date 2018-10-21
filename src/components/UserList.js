import React from 'react';
import User from './User';

const UserList = (props) => {
    return (
        <div className='addUserLayout'>
            {props.users.map((user, index) => 
                <User key={index} {...user}/>
            )}
        </div>
    );
}

export default UserList;
