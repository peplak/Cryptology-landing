import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="Header">
      <div className="logo" onClick={scrollToTop}>
        <img src="https://pngimg.com/d/bitcoin_PNG31.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#info">Информация о курсах</a>
        <span className="separator">|</span>
        <a href="#buy">Купить</a>
        <span className="separator">|</span>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
