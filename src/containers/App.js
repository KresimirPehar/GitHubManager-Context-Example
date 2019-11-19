import React, { useContext } from 'react';
import '../style/style.css';
import UsersPage from './UsersPage';
import Search from './Search';
import Header from '../components/Header';
import { Store } from '../store';

const App = () => {
  const store = useContext(Store);

  return (
    <div className='app'>
      <Header />
      <Search />
      <UsersPage users={filteredUser} />
    </div>
  );
};

export default App;
