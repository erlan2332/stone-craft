import React, { useState } from 'react';
import axios from 'axios';
import './HomeSection.css';
import image1 from './assets/photo_bg1.jpg';
import image2 from './assets/photo_bg2.jpg';
import image3 from './assets/photo_bg3.jpg';
import kyrgyzstanFlag from './flag/Flag_of_Kyrgyzstan_(1992-2023).png';
import russiaFlag from './flag/illustration-of-russia-flag_53876-27016.avif';
import kazakhstanFlag from './flag/Flag_of_Kazakhstan.svg.png';
import uzbekistanFlag from './flag/images.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './assets/postCraft.png'

function HomeSection() {
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://zavod-marble.onrender.com/send-template-message', { phone, appointmentDate })
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

    setPhone('');
    setAppointmentDate('');
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-and-button">
          <div className="text-content">
            <div className='grid_2_col'>
              <div>
              <div className='craftStone'><img className='logoPng' src={logo} /></div>
                <p className='text_export'>
                  Компания Craft Stone, расположенная в городе Джалал-Абад, Кыргызстан, специализируется на производстве высококачественных мраморных плиток и травертина. Мы предлагаем как частным лицам, так и крупным компаниям широкий выбор продукции для строительства и отделки.
                </p>
              </div>
              <div>
                <div className="flags">
                  <img src={kyrgyzstanFlag} alt="Флаг Кыргызстана" title="Кыргызстан" />
                  <img src={russiaFlag} alt="Флаг России" title="Россия" />
                  <img src={kazakhstanFlag} alt="Флаг Казахстана" title="Казахстан" />
                  <img src={uzbekistanFlag} alt="Флаг Узбекистана" title="Узбекистан" />
                </div>
                <p className='gridFlagTxt'>
                  Мы экспортируем нашу продукцию в страны СНГ, обеспечивая надежную и быструю доставку. Частные лица могут приобретать нашу продукцию для строительства собственного дома, а строительные компании могут заказывать большие партии для крупных проектов.
                </p>
                <button className="btn btn-primary tre" data-bs-toggle="modal" data-bs-target="#contactModal">Связаться с нами</button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-grid">
          <div className="image-card">
            <img src={image1} alt="Банковские услуги, которые вы хотите использовать" />
            <div className="image-overlay">
            </div>
          </div>
          <div className="image-card">
            <img src={image2} alt="Полная финансовая прозрачность с Sight Premium" />
            <div className="image-overlay">
            </div>
          </div>
          <div className="image-card">
            <img src={image3} alt="Оставайтесь на связи с кем угодно и где угодно" />
            <div className="image-overlay">
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">Форма для связи</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="phone">Номер телефона:</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
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
                    className="form-control"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary tre">Отправить</button>
                {message && <p className="message">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
