import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className='about-container'>
      <div className='content-grid'>
        <div className='title-column'>
          <p className='title-text'>About us</p>
        </div>
      </div>
      <div className='content-grid'>
        <div className='text-column1'>
          <p>Selamat datang di platform pemilihan revolusioner kami!👋</p>
        </div>
        <div className='text-column'>
          <p>kami berkomitmen untuk mengubah lanskap demokrasi melalui teknologi blockchain. Kami fokus menciptakan sistem pemilihan yang aman, transparan, dan tidak dapat dimanipulasi.</p>
          <p>Bayangkan masa depan di mana setiap suara tercatat pada blockchain yang tidak dapat diubah, memastikan integritas proses pemilihan. Keahlian kami berada dalam mengembangkan solusi mutakhir yang menjamin privasi pemilih sambil menjaga standar keamanan tertinggi.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
