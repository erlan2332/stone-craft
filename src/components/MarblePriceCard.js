import React from 'react';
import './MarblePriceCard.css';

function MarblePriceCard({ title, description, features, bgColor, image }) {
  return (
    <div className="marble-price-card" style={{ backgroundImage: `url(${image})`, backgroundColor: bgColor }}>
      <div className="marble-price-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.included ? 'included' : 'not-included'}>
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MarblePriceCard;
