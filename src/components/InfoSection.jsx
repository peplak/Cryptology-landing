import React from 'react';
import InfoCard from './InfoCard';
import './InfoSection.css';

const InfoSection = () => {
  const infoCardsData = [
    {
      imgSrc: 'https://plus.unsplash.com/premium_photo-1714618942735-5f1585da8b88?q=80&w=1954',
      title: 'Курс по трейдингу',
      description: 'Научитесь основам трейдинга и получите необходимые знания для успешной торговли.',
    },
    {
      imgSrc: 'https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=2070',
      title: 'Анализ графиков',
      description: 'Развивайте навыки анализа графиков и понимания трендов на финансовых рынках.',
    },
    {
      imgSrc: 'https://plus.unsplash.com/premium_photo-1714618831065-8e8dadd8d3df?q=80&w=2100',
      title: 'Стратегии торговли',
      description: 'Узнайте эффективные стратегии для успешной торговли и управления рисками.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072',
      title: 'Управление капиталом',
      description: 'Научитесь управлять своими финансами для максимизации прибыли.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041',
      title: 'Психология трейдинга',
      description: 'Разберитесь в психологии торговли и улучшите свои результаты.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1932',
      title: 'Анализ рисков',
      description: 'Научитесь эффективно анализировать и управлять рисками.',
    }
  ];

  return (
    <section id="info" className="info-section">
      <h2>Информация о курсах</h2>
      <div className="info-cards">
        {infoCardsData.map((card, index) => (
          <InfoCard key={index} imgSrc={card.imgSrc} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
