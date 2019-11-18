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
            <button
                type='submit'
                className='userAddBtn'
                onClick={onSave}>
                Add
            </button>
        </form>
    );
};

export default AddUser;
