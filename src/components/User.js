import React, { memo } from 'react';

const User = memo(({ avatarUrl, name, location }) => {
    return (
        <div className='userCard'>
            <img src={avatarUrl} width='75' alt='avatar' />
            <div className='userName'>{name}</div>
            <div className='userLocation'>{location}</div>
        </div>
    );
});

export default User;
