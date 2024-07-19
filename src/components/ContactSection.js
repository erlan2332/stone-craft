import React, { useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [phone, setPhone] = useState('');
  const [messageText, setMessageText] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageTextChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Отправка данных...');
    setIsModalOpen(true);

    // Имитация отправки данных
    setTimeout(() => {
      setMessage('Данные отправлены! С вами свяжутся.');
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h4 className="header_contacts">Наши контакты</h4>
          <p>Если у вас есть какие-либо вопросы или вам нужна дополнительная информация, пожалуйста, не стесняйтесь обращаться к нам:</p>
          <p><strong>Телефон:</strong> +996 773 003 260</p>
          <p><strong>Адрес:</strong> Г. Джалал-Абад ул. Мамыра Баатыра 87</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="phone">Номер телефона:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="messageText">Ваше сообщение:</label>
            <input
              type="text"
              id="messageText"
              value={messageText}
              onChange={handleMessageTextChange}
              required
            />
          </div>
          <button type="submit" className="contact-button">Отправить</button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;

