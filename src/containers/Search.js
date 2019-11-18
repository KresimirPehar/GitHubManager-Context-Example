import React from 'react';
import { connect } from 'react-redux';
import { filterUser } from '../redux/actions/userActions';

const Search = ({ filterUser }) => {
    const onChange = e => filterUser(e.target.value);

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

export default connect(null, { filterUser })(Search);
