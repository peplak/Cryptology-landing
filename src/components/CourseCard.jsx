import React from 'react';
import './CourseCard.css'; // Импортируем CSS файл для стилей карточки

const CourseCard = ({ course, onBuyClick }) => {
  return (
    <div className="course-card" style={{ borderColor: course.color }}>
      <div className="card-content">
        <div className="card-left">
          <h2 className="course-title">{course.title}</h2>
          <p className="price">{course.price} рублей</p>
        </div>
        <div className="card-center">
        <button className="buy-button" onClick={() => onBuyClick(course.title)}>
          Купить
        </button>
      </div>
      <div className="card-right">
        <ul className="course-description">
         {course.description.map((line, index) => (
            <li key={index}>{line}</li>
            ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default CourseCard;
