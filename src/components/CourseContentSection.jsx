import React from 'react';
import './CourseContentSection.css';

const CourseContentSection = () => {
  return (
    <section className="course-content">
      <div className="course-step">
        <div className="step-number">1</div>
        <div className="step-description">
          <h3>Видеоуроки и онлайн-встречи</h3>
          <p>Доступ к ним остается на 3 месяца</p>
        </div>
      </div>
      <div className="arrow">→</div>
      <div className="course-step">
        <div className="step-number">2</div>
        <div className="step-description">
          <h3>Домашние задания</h3>
          <p>С обратной связью от эксперта</p>
        </div>
      </div>
      <div className="arrow">→</div>
      <div className="course-step">
        <div className="step-number">3</div>
        <div className="step-description">
          <h3>Кураторы курсов</h3>
          <p>Всегда на связи, чтобы ответить на ваши вопросы</p>
        </div>
      </div>
      <div className="arrow">→</div>
      <div className="course-step">
        <div className="step-number">4</div>
        <div className="step-description">
          <h3>Чат с участниками курса</h3>
          <p>Новости и прогнозы, полезные материалы и просто общение</p>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
