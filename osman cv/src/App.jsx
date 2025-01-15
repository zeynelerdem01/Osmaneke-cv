import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // İkonları doğru şekilde import ediyoruz
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Osman Eke</h1>
        <p>Bilgisayar Programcılığı Öğrencisi | Yazılım Geliştirici Adayı</p>
      </header>

      <main className="cv-content">
        <section className="cv-section">
          <h2>Kişisel Bilgiler</h2>
          <p><strong>Adı:</strong> Osman</p>
          <p><strong>Soyadı:</strong> Eke</p>
          <p><strong>E-posta:</strong> osman.eke@kun.edu.tr</p>
        </section>

        <section className="cv-section">
          <h2>Eğitim Bilgileri</h2>
          <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
          <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
          <p><strong>Mezuniyet Yılı:</strong> 2024-2025</p>
        </section>

        <section className="cv-section">
          <h2>İş Deneyimi</h2>
          <p>Yok</p>
        </section>

        <section className="cv-section">
          <h2>Yetenekler</h2>
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Oyun oynamak</li>
            <li>Otobüs sürmek</li>
            <li>Araba sürmek</li>
          </ul>
        </section>
      </main>

      <footer className="social-media">
        <h2>Beni Takip Edin</h2>
        <div className="icon-container">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
