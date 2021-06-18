import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
          <NavLink to='/profile'>
            <img src='https://www.ynovation.de/wordpress/wp-content/uploads/2018/07/IG_Glyph_Fill.jpg' alt=''/>
          </NavLink>  
        </header>
    )
}

export default Header;