import React from 'react'
import './Footer.scss'
import logo from '../../widgets/assets/logo.svg'

import { FiPhone, FiClock, FiMapPin, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Левая часть */}
        <div className="footer__col">
          <img src={logo} alt="Baitex" className="footer__logo" />

          <div className="footer__item">
            <FiPhone />
            <span>
              +996 (505) 406 805 <br />
              +996 (505) 406 805
            </span>
          </div>

          <div className="footer__item">
            <FiClock />
            <span>
              Пн–Пт: 09:00–18:00 <br />
              Сб: 10:00–15:30, Вс — выходной
            </span>
          </div>

          <div className="footer__item">
            <FiMapPin />
            <span>
              г. Бишкек, ул. 7 апреля, 4а <br />
              720065, Kyrgyzstan
            </span>
          </div>

          <div className="footer__socials">
  <a
    href="https://wa.me/996505406805"
    target="_blank"
    rel="noreferrer"
    className="footer__social"
  >
    <span className="footer__social-icon">
      <FaWhatsapp />
    </span>
    <span className="footer__social-text">WhatsApp</span>
  </a>

  <a
    href="#"
    target="_blank"
    rel="noreferrer"
    className="footer__social"
  >
    <span className="footer__social-icon">
      <FaInstagram />
    </span>
    <span className="footer__social-text">Instagram</span>
  </a>
</div>

        </div>

        {/* Информация */}
        <div className="footer__col">
          <h4>Информация</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/delivery">Delivery Information</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/brands">Производители</a></li>
            <li><a href="/certificates">Сертификаты</a></li>
            <li><a href="/partners">Партнерская программа</a></li>
            <li><a href="/sales">Акции</a></li>
            <li><a href="/sitemap">Карта сайта</a></li>
          </ul>
        </div>

        {/* Клиенту */}
        <div className="footer__col">
          <h4>Клиенту</h4>
          <ul>
            <li><a href="/profile">Личный кабинет</a></li>
            <li><a href="/orders">История заказов</a></li>
            <li><a href="/favorites">Закладки</a></li>
            <li><a href="/return">Возврат товара</a></li>
          </ul>

          <p className="footer__subscribe-text">
            Получайте информацию о действующих акциях и специальных предложениях
          </p>

          <button className="footer__btn">
            <FiMail />
            Подписаться
          </button>
        </div>

        {/* Карта */}
     <div className="footer__map">
  <div className="footer__map-title">Карта</div>

  <iframe
    title="2GIS Map"
    src="https://widgets.2gis.com/widget?type=firm&id=70000001025909557&lang=ru_RU"
    frameBorder="0"
  />
</div>



      </div>

      <div className="footer__bottom">
        Baitech © 2025   <a href="https://www.instagram.com/a1i.o6/">@a1i.o6</a>
      </div>
    </footer>
  )
}

export default Footer
