import React from "react";
import "../styles/Footer.scss";
import { useSelector } from "react-redux";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
const Footer = () => {
  const user = useSelector((state) => state.authUserSlice.user);

  const showComponent = () => {
    if (!Object.keys(user).length) {
      return "hidden";
    } else {
      return "footer";
    }
  };

  return (
    <section className={showComponent()}>
      <ul className='footer__support'>
        <li className='footer__title'>
          <ContactSupportIcon />
          Поддержка
        </li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>FAQ</li>
        <li>База знаний</li>
        <li>Гарантия</li>
      </ul>

      <ul className='footer__company'>
        <li className='footer__title'>
          <ApartmentIcon /> Компания
        </li>
        <li>Контакты</li>
        <li>О нас</li>
        <li>Наше производство</li>
        <li>Почему мы?</li>
        <li>Новости</li>
        <li>Статьи</li>
        <li>Вакансии</li>
      </ul>
      <ul className='footer__contacts'>
        <li className='footer__title'>
          <CallIcon />
          Контакты
        </li>
        <li>+7 (999) 777-85-33</li>
        <li>Ежедневно с 10:00 до 20:00</li>
        <li>г.Таганрог, ул.Чехова, д.2, к.1</li>
      </ul>
    </section>
  );
};

export default Footer;
