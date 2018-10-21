import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/userActions';

class Search extends Component {

    onChange = (e) => {
        this.props.actions.filterUser(e.target.value);
    }

    render() {
        return (
            <search className='searchLayout'>
                <div className='searchText'><span>Find user</span></div>
                <input
                    type='text'
                    className='userInput searchInput'
                    placeholder='Search . . .'
                    onChange={this.onChange}
                    required/>
            </search>
        );
    }
}

function mapStateToProps(state, ownProps) { 
    return{};
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
