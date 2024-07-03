import React from 'react';
import './AboutSection.css';
import profile1 from './assets/photo_bg1.jpg';
import profile2 from './assets/photo_bg2.jpg';

function AboutSection() {
  return (
    <section id="about" className="about-section">
  <div className='text_header_1'>Производство изделий из мрамора и травертина</div>
  <div className="founders">
    <div className="founder">
      <img src={profile1} alt="Основатель Томас - мрамор и травертин" className="profile-pic" />
      <div className="profile-name">THOMAS</div>
    </div>
    <div className="founder">
      <img src={profile2} alt="Основатель Эоин - мрамор и травертин" className="profile-pic" />
      <div className="profile-name">EOIN</div>
    </div>
  </div>
  <p>До создания фабрики мраморной плитки наши основатели десятки лет проработали старшими операторами службы безопасности, сталкиваясь со всеми обычными проблемами, такими как чрезмерный объем работы, нехватка персонала и неизбежные инциденты. Они знали, что необходимо решение, ориентированное на лазерную обработку, поэтому в 2018 году начали строительство завода по производству мраморной плитки и травертина.</p>
  <div className="mission">
    <div className="mission-card">
      <h2>НАША МИССИЯ</h2>
      <p className='text_to_2'>Быть признанным лидером в производстве изделий из мрамора и травертина.</p>
    </div>
    <div className="team">
      <div className="team-member"><img src={profile1} alt="Команда - мрамор и травертин" className="team-pic" /></div>
      <div className="team-member"><img src={profile2} alt="Команда - мрамор и травертин" className="team-pic" /></div>
      <div className="team-member"><img src={profile1} alt="Команда - мрамор и травертин" className="team-pic" /></div>
    </div>
  </div>
</section>
  );
}

export default AboutSection;
