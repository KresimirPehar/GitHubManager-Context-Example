import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../style/style.css';
import UsersPage from './UsersPage';
import Search from './Search';
import Header from '../components/Header';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/> 
        <Search/>    
        <UsersPage users={this.props.state}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state.users.filteredUser
  };
}

export default connect(mapStateToProps)(App);
