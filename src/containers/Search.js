import React from 'react';
import { filterUser } from '../actions/userActions';

const Search = ({ dispatch }) => {
    const onChange = e => dispatch(filterUser(e.target.value));

    return (
        <div id='search' className='searchLayout'>
            <div className='searchText'><span>Find user</span></div>
            <input
                type='text'
                className='userInput searchInput'
                placeholder='Search . . .'
                onChange={onChange}
                required />
        </div>
    );
};

export default Search;