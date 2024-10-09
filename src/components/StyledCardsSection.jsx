import React, { useRef, useEffect } from 'react';
import './StyledCardsSection.css';

const StyledCardsSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('visible');
          } else {
            card.classList.remove('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="styled-cards-section">
      <div className="styled-card" ref={(el) => (cardRefs.current[0] = el)}>
        <h3>🔥 Почему стоит пройти курс?</h3>
        <p>Наш курс поможет вам систематизировать знания по трейдингу и начать получать реальные результаты.</p>
      </div>
      <div className="styled-card" ref={(el) => (cardRefs.current[1] = el)}>
        <h3>🚀 С чего начать?</h3>
        <p>Вы получите четкие инструкции по первым шагам в мире торговли и инвестиций.</p>
      </div>
      <div className="styled-card" ref={(el) => (cardRefs.current[2] = el)}>
        <h3>📈 Что вы получите на курсе?</h3>
        <p>Обучение анализу графиков и управлению рисками поможет вам стать профессионалом.</p>
      </div>
      <div className="styled-card" ref={(el) => (cardRefs.current[3] = el)}>
        <h3>💡 Как проходит обучение?</h3>
        <p>Курс включает видеоуроки, вебинары и практические задания для закрепления знаний.</p>
      </div>
      <div className="styled-card" ref={(el) => (cardRefs.current[4] = el)}>
        <h3>🏆 Преимущества курса</h3>
        <p>Вы получите сертификат, подтверждающий ваши навыки и доступ к сообществу трейдеров.</p>
      </div>
    </section>
  );
};

export default StyledCardsSection;
