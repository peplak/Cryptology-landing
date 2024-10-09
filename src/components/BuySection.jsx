import React from 'react';
import CourseList from './CourseList';
import './BuySection.css';

const BuySection = ({ onBuyClick }) => {
  return (
    <section id="buy" className="buy-section">
      <h2>Купить курс</h2>
      <CourseList onBuyClick={onBuyClick} />
    </section>
  );
};

export default BuySection;
