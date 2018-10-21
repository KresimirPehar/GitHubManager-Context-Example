import React from 'react';

const AddUser = (props) => {
    return (
        <form className='addForm'>
            <input 
                type='text' 
                className='userInput' 
                placeholder={props.placeholder} 
                value={props.userName} 
                onChange={props.onChange}
                required/>
            <input 
                type='submit'
                className='userAddBtn'
                value='Add'
                onClick={props.onSave}/>
        </form>
    );
}

export default AddUser;
