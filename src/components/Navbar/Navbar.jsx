import React from 'react';
import classNames from 'classnames';
import m from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={m.nav}>
        <div className={m.item}>
          <button className={m.item__button}>Profile</button>
        </div>
        <div className={m.item}>
          <button className={m.item__button}>Messenger</button>
        </div>
        <div className={m.item}>
          <button className={m.item__button}>News</button>
        </div>
        <div className={m.item}>
          <button className={m.item__button}>Music</button>         
        </div>
        <div className={m.item}>
          <button className={classNames(m.item__button, m.item__button__setting)}>Setting</button>  
        </div>
      </nav>
    );
} 

export default Navbar;