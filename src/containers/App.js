import React from 'react';
import { connect } from 'react-redux';
import '../style/style.css';
import UsersPage from './UsersPage';
import Search from './Search';
import Header from '../components/Header';

const App = ({ state }) => {
  return (
    <div className='app'>
      <Header />
      <Search />
      <UsersPage users={state} />
    </div>
  );
};

export default connect((state) => ({
  state: state.users.filteredUser
}))(App);

