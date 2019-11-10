import React from 'react';

const AddUser = ({ placeholder, userName, onChange, onSave }) => {
    return (
        <form className='addForm'>
            <input
                type='text'
                className='userInput'
                placeholder={placeholder}
                value={userName}
                onChange={onChange}
                required />
            <input
                type='submit'
                className='userAddBtn'
                value='Add'
                onClick={onSave} />
        </form>
    );
};

export default AddUser;
