import './App.css';
import Header from './components/Header/Header.jsx'
import Profile from './components/Profile/Profile';
import React from 'react';
import {Route} from 'react-router-dom'
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import { AuthContainer } from './components/authentication/AuthContainer';


const App = () => {
  return (
    <div className='appwrapper'>
      <Header />
      <NavbarContainer />
      <div className='appwrappercontent'> 
        <Route path='/dialogs' component={() => <DialogsContainer />} />
        <Route path='/profile' component={() => <Profile />} />
        <Route path='/users' component={() => <UsersContainer />} />
        <Route path='/auth' component={() => <AuthContainer />} />
      </div>
    </div>
  );
}

export default App;
