import React, { useState } from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import StyledCardsSection from './components/StyledCardsSection';
import CourseContentSection from './components/CourseContentSection';
import BuySection from './components/BuySection';
import Contacts from './components/Contacts';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <InfoSection />
        <div className="section-divider"></div> {/* Разделительная линия */}
        <StyledCardsSection />
        <div className="section-divider"></div> {/* Разделительная линия */}
        <CourseContentSection />
        <div className="section-divider"></div> {/* Разделительная линия */}
        <BuySection onBuyClick={handleBuyClick} />
        <div className="section-divider"></div> {/* Разделительная линия */}
        <Contacts />
      </main>
      {isModalOpen && (
        <Modal course={selectedCourse} onClose={closeModal} />
      )}
      <footer>
      <p>© 2024 Криптология. Все права защищены.</p>
      <a href="#privacy">Политика конфиденциальности</a> | 
      <a href="#terms">Условия использования</a>
    </footer>

    </div>
  );
}

export default App;
