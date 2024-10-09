import React from 'react';
import './ContactsSection.css';

const ContactsSection = () => {
  return (
    <section id="contacts" className="contacts-section">
      <h2>Контакты</h2>
      <p>Для связи с нами, пожалуйста, заполните форму ниже или напишите нам на электронную почту.</p>
      <form>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Ваше сообщение" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default ContactsSection;
