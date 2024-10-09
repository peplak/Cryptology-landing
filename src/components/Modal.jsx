import React from "react";
import "./Modal.css"; // Убедитесь, что стили для модалки присутствуют

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Выбор способа оплаты</h2>
        <div className="payment-options">
          <button className="payment-button">Оплатить при помощи .....</button>
        </div>
        <button className="close-button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
