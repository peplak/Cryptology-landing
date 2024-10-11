import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Header">
      <div className="logo" onClick={scrollToTop}>
        <img src="https://pngimg.com/d/bitcoin_PNG31.png" alt="Logo" />
      </div>
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#info" onClick={toggleMenu}>Информация о курсах</a>
        <span className="separator">|</span>
        <a href="#buy" onClick={toggleMenu}>Купить</a>
        <span className="separator">|</span>
        <a href="#contacts" onClick={toggleMenu}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
