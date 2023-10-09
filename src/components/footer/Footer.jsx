import React from "react";
import './Footer.css';

export default function Footer() {
  return ( 
<footer className="footer">
  <div className="footer__content">
  <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
  <div className="footer__data">
    <p className="footer__copyright">&#169; 2023</p>
    <nav className="footer__items">
    <a
            href='https://practicum.yandex.ru/'
            target='_blank'
            className="footer__link"
            rel="noreferrer">
              Яндекс.Практикум
          </a>
          <a href="https://github.com/olgaivashova/" className="footer__link" target="_blank" rel="noreferrer">Github</a>
   </nav>
  </div>
  </div>

</footer>)
}