import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания открытости меню

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };

  return (
    <header className="Header">
      <div className="logo" onClick={scrollToTop}>
        <img src="https://pngimg.com/d/bitcoin_PNG31.png" alt="Logo" />
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
