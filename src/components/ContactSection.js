import React, { useState } from 'react';
import axios from 'axios';
import './ContactSection.css';

function ContactSection() {
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://marble-tile-factory-server-pwrc2om3m-erlans-projects-7dfeb46c.vercel.app/api/send-template-message', { phone, appointmentDate })
      .then(response => {
        if (response.data.success) {
          setMessage('Сообщение успешно отправлено!');
        } else {
          setMessage('Не удалось отправить сообщение.');
        }
      })
      .catch(error => {
        console.error('Ошибка при отправке сообщения!', error);
        setMessage('Не удалось отправить сообщение.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h4 className='header_contacts'>Наши контакты</h4>
          <p>Если у вас есть какие-либо вопросы или вам нужна дополнительная информация, пожалуйста, не стесняйтесь обращаться к нам:</p>
          <p><strong>Телефон:</strong> +996 773 003 260</p>
          <p><strong>Адресс:</strong> Г. Джалал-Абад ул. Мамыра Баатыра 87</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="phone">Номер телефона:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Ваше сообщение:</label>
            <input
              type="text"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="contact-button">Отправить</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
}

export default ContactSection;
