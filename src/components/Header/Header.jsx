import React from 'react';
import m from './Header.module.css'
import animationLogo from '../../images/animation-logo.gif'

const Header = () => {
    return (
        <header className={m.header}>
            <a href='#?'>
                <img className={m.header__logo} src={animationLogo} alt='Logo' />
            </a>
            <a href='#?'>
                <h1 className={m.header__name}>Lapchat</h1>
            </a>
        </header>
    );
}

export default Header;