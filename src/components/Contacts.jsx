import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contacts.css'; // Подключаем стили

function Contacts() {
  const [state, handleSubmit] = useForm("mgveewdq");
  if (state.succeeded) {
      return <p>Спасибо за сообщение!</p>;
  }
  return (
    <div className="contact-form-container" id='contacts'>
      <form onSubmit={handleSubmit}>
        <h2>Свяжитесь с нами!</h2> 
        
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          name="name"
        />
        <ValidationError 
          prefix="Имя" 
          field="name"
          errors={state.errors}
        />

        <label htmlFor="email">Адрес электронной почты</label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Contacts;
