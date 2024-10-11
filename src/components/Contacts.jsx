import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contacts.css'; // Используем для стилизации

function ContactForm() {
  const [state, handleSubmit] = useForm("mgveewdq");

  if (state.succeeded) {
    return <p>Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Имя:</label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      
      <label htmlFor="email">Адрес электронной почты:</label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Сообщение:</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Отправить сообщение
      </button>
    </form>
  );
}

const Contacts = () => {
  return (
    <section id="contacts">
      <h2>Свяжитесь с нами</h2>
      <ContactForm />
    </section>
  );
};

export default Contacts;
