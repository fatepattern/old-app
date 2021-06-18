import React from 'react';
import { NavLink } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
      <StoreContext.Consumer>
        { (store) => {
          //if (props.isAuth)
          return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.friends}>
          <li>{props.sidebar.friends[0].name}</li>
          <li>{props.sidebar.friends[1].name}</li>
          <li>{props.sidebar.friends[2].name}</li>
        </div>
      </nav>);
      
        }
      }
      </StoreContext.Consumer>
    )
}

export default Navbar;