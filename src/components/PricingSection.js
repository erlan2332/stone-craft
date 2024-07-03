import React from 'react';
import MarblePriceCard from './MarblePriceCard';
import './PricingSection.css';
import travertineBg1 from './assets/photo_bg1.jpg';
import travertineBg2 from './assets/photo_bg2.jpg';
import travertineBg3 from './assets/photo_bg3.jpg';

function PricingSection() {
  const travertineTypes = [
    {
      title: 'Полированный травертин',
      description: 'Полированный травертин имеет гладкую, зеркальную поверхность, которая придает ему роскошный и элегантный вид. Идеально подходит для внутренней отделки.',
      features: [
        { name: 'Высокая устойчивость к износу', included: true },
        { name: 'Легкость в уходе', included: true },
        { name: 'Разнообразие цветов и узоров', included: true },
        { name: 'Повышенная скользкость', included: false },
      ],
      bgColor: 'rgba(0, 0, 0, 0.5)',
      image: travertineBg1,
    },
    {
      title: 'Шлифованный травертин',
      description: 'Шлифованный травертин имеет матовую поверхность, которая создает более приглушенный и современный вид. Он менее скользкий, чем полированный травертин, и идеально подходит для полов.',
      features: [
        { name: 'Умеренная устойчивость к износу', included: true },
        { name: 'Матовая поверхность', included: true },
        { name: 'Меньшая скользкость', included: true },
        { name: 'Менее яркие цвета', included: false },
      ],
      bgColor: 'rgba(0, 0, 0, 0.5)',
      image: travertineBg2,
    },
    {
      title: 'Стареющий травертин',
      description: 'Стареющий травертин имеет уникальный внешний вид с естественными изъянами и патиной, которые придают ему старинный и винтажный вид. Идеально подходит для наружной отделки.',
      features: [
        { name: 'Уникальный внешний вид', included: true },
        { name: 'Высокая прочность', included: true },
        { name: 'Натуральная патина', included: true },
        { name: 'Требует регулярного ухода', included: false },
      ],
      bgColor: 'rgba(0, 0, 0, 0.5)',
      image: travertineBg3,
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <p className='paragraph_p_1'>Виды травертина</p>
      <div className="pricing-cards">
        {travertineTypes.map((type, index) => (
          <MarblePriceCard
            key={index}
            title={type.title}
            description={type.description}
            features={type.features}
            bgColor={type.bgColor}
            image={type.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
