import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Закрыть меню после выбора ссылки
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav_2">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links_2 ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item_2">
            <a
              href="#home"
              className={`nav-link_2 ${activeLink === 'home' ? 'active_2' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Домой
            </a>
          </li>
          <li className="nav-item_2">
            <a
              href="#products"
              className={`nav-link_2 ${activeLink === 'products' ? 'active_2' : ''}`}
              onClick={() => handleLinkClick('products')}
            >
              Продукт
            </a>
          </li>
          <li className="nav-item_2">
            <a
              href="#blog"
              className={`nav-link_2 ${activeLink === 'blog' ? 'active_2' : ''}`}
              onClick={() => handleLinkClick('blog')}
            >
              Связаться
            </a>
          </li>
          <li className="nav-item_2">
            <a
              href="#about"
              className={`nav-link_2 ${activeLink === 'about' ? 'active_2' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              О нас
            </a>
          </li>
        </ul>
        <a href="#contact" className="contact-button_2">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
