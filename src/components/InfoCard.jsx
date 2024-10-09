import React from 'react';
import './InfoCard.css';

const InfoCard = ({ imgSrc, title, description }) => {
  return (
    <div className="info-card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;
