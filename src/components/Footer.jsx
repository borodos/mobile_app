import React from "react";
import "../styles/Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.authUserSlice.user);

  // const imageProfile = () => {
  //   if (user.image) {
  //     return require("../../assets/potter.jpeg");
  //   }
  // };

  const showComponent = () => {
    if (!user?.isAuth) {
      return "hidden";
    } else {
      return "footer";
    }
  };

  return (
    <section className={showComponent()}>
      <ul className='footer__support'>
        <li className='footer__title'>Поддержка</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>FAQ</li>
        <li>База знаний</li>
        <li>Гарантия</li>
      </ul>
      <ul className='footer__projects'>
        <li className='footer__title'>Проекты</li>
        <li>Блогеры</li>
        <li>Игровые клубы</li>
        <li>Киберспорт</li>
        <li>Мероприятия</li>
      </ul>
      <ul className='footer__company'>
        <li className='footer__title'>Компания</li>
        <li>Контакты</li>
        <li>О нас</li>
        <li>Наше производство</li>
        <li>Почему мы?</li>
        <li>Новости</li>
        <li>Статьи</li>
        <li>Вакансии</li>
      </ul>
      <ul className='footer__contacts'>
        <li className='footer__title'>Контакты</li>
        <li>+7 (999) 111-22-33</li>
        <li>Ежедневно с 10:00 до 20:00</li>
        <li>г.Таганрог, ул.Гдетотамская, д.2, к.1</li>
      </ul>
    </section>
  );
};

export default Footer;
