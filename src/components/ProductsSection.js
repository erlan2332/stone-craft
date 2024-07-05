import React from 'react';
import './ProductsSection.css';
import logo from './assets/CraftStoe.png'; // Обновите путь к вашему логотипу

function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <h1>Мраморные и травертиновые изделия</h1>
      <h2 className='heaeder_craft'>Изысканные изделия из мрамора и травертина</h2>
      <div className="products-grid">
        <div className="product-card">
          <div className="card-number">01</div>
          <h2>Мраморный стол</h2>
          <p>Изысканный мраморный стол создает атмосферу роскоши и элегантности в любом интерьере. Выбирайте из различных оттенков и фактур, чтобы подчеркнуть ваш уникальный стиль.</p>
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="product-card">
          <div className="card-number">02</div>
          <h2>Травертиновая плитка</h2>
          <p>Травертиновая плитка - идеальное решение для отделки стен и полов. Ее естественная текстура и теплый оттенок придают вашему интерьеру уют и неповторимый шарм.</p>
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="product-card">
          <div className="card-number">03</div>
          <h2>Мраморная фигура</h2>
          <p>Мраморные фигуры - это не только произведения искусства, но и символы роскоши и утонченного вкуса. Добавьте изящество и элегантность в ваш дом или офис с нашими мраморными скульптурами.</p>
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
      </div>
      <meta name="description" content="Купите мраморные и травертиновые изделия высокого качества от Stone Craft. Мраморные столы, травертиновая плитка и мраморные фигуры для вашего интерьера." />
      <title>Мраморные и травертиновые изделия - Stone Craft</title>
    </section>
  );
}

export default ProductsSection;
