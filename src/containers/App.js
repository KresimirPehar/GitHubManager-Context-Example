import React from 'react';
import { useSelector } from 'react-redux';
import '../style/style.css';
import UsersPage from './UsersPage';
import Search from './Search';
import Header from '../components/Header';

const App = () => {
  const filteredUser = useSelector(state => state.users.filteredUser);
  
  return (
    <div className='app'>
      <Header />
      <Search />
      <UsersPage users={filteredUser} />
    </div>
  );
};

export default App;
