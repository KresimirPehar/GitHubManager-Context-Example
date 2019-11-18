import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from '../redux/actions/userActions';

const Search = () => {
    const dispatch = useDispatch();
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