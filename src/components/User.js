import React from 'react';

const User = (props) => {
    return (
            <div className='userCard'>
                <img src={props.avatar_url} width='75' alt='avatar'/>
                <div className='userName'>{props.name}</div>
                <div className='userLocation'>{props.location}</div>
            </div>
    );
}

export default User;
