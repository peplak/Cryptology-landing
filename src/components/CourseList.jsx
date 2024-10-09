import React from 'react';
import CourseCard from './CourseCard'; // Импортируем CourseCard
import './CourseList.css'; // Импортируем CSS файл

const CourseList = ({ onBuyClick }) => {
  const courses = [
    { title: 'Фрилансер', price: '100 000', color: '#ffcccb', description: ['Видеокурс', '1000+ часов видеороликов', 'Доступ к которым останется у вас'] },
    { title: 'Бизнесмен', price: '300 000', color: '#add8e6', description: ['Видеокурс', 'Доступ к торговому боту'] },
    { title: 'Миллиардер', price: '1 000 000', color: '#90ee90', description: ['Видеокурс', 'Доступ к торговому боту', 'Личное сопровождение при обучении'] },
  ];
  

  return (
    <div>
      {courses.map((course) => (
        <CourseCard 
          key={course.title} 
          course={course} 
          onBuyClick={onBuyClick} 
        />
      ))}
    </div>
  );
};

export default CourseList;
