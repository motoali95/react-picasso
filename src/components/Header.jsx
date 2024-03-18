import React from "react";
import '../styles/Header.scss'
import {Link} from 'react-router-dom'
import LogoWhatsapp from '../img/Logo_whatsapp.png'
import LogoPicasso from '../img/Logo_picasso.png'


const Header = () => {
  return <div className="header">
    <div className="logo">
    <Link to={"/"}>
    <img width={150} src={LogoPicasso} alt="" />
    </Link>
    <h3>Пикассо</h3>
    </div>
    <h4>Независимый центр рентгено-диагностики</h4>
    <ul>
        <li>услуги</li>
        <li>цены</li>
        <li>информация</li>
    </ul>
    <div className="contactInfo">
    <h4>+7(812)382-56-78</h4>
    <img src={LogoWhatsapp} alt="" />
    </div>
  </div>;
};

export default Header;
