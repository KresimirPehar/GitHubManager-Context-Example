import React from 'react';
import '../style/style.css';
import UsersPage from './UsersPage';
import Search from './Search';
import Header from '../components/Header';
import { useStore } from '../store';

const App = () => {
  const [{ filteredUser, error }, dispatch] = useStore();

  return (
    <div className='app'>
      <Header />
      <Search dispatch={dispatch} />
      <UsersPage filteredUser={filteredUser} error={error} dispatch={dispatch} />
    </div>
  );
};

export default App;
