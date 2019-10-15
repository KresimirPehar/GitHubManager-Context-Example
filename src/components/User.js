import React from 'react';

const User = ({avatar_url, name, location}) => {
    return (
            <div className='userCard'>
                <img src={avatar_url} width='75' alt='avatar'/> 
                <div className='userName'>{name}</div>
                <div className='userLocation'>{location}</div>
            </div>
    );
}

export default User;
