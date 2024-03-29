import React from "react";
import logo from "../../assets/img/coolSushiLogo/CoolSushiLogoNew.png";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const Header = () => {
  return (
    <div class="wrapper">
      <header class="header">
        <div class="header__top">
          <button class="btn btn-menu">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="menu-mobile">
            <div class="menu-mobile-top">
              <div class="menu-mobile-logo">
                <img src={logo} alt="logo" class="logo-img" />
              </div>
              <button class="btn">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="menu-mobile-content">
              <div class="menu-item">
                <button class="btn">
                  <i class="fa-solid fa-location-dot"></i> Краснодар
                </button>
              </div>
              <div class="menu-item">
                <button class="btn">
                  <i class="fa-regular fa-user"></i> Войти
                </button>
              </div>
              <div class="menu-item">
                <button class="btn btn-cart">
                  <i class="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div class="menu-item"></div>
              <div class="menu-item"></div>
            </div>
          </div>
          <div class="header__top-left">
            <div class="city">
              <Link to="#" class="btn link city-link">
                Краснодар
              </Link>
            </div>
            <div class="logo">
              <Link to="/home" class="link">
                <img src={logo} alt="logo" class="logo-img" />
              </Link>
            </div>
          </div>
          <div class="menu">
            <button class="btn btn-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button class="btn btn-login">
              <i class="fa-regular fa-user"></i> Войти
            </button>
            <button class="btn btn-cart">
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>
        <div class="header__bottom">
          <nav class="header-nav" id="header-nav">
            <Link to="#" class="btn link">
              <i class="fa-solid fa-crown crown"></i>От шефа
            </Link>
            <Link to="#" class="btn link">
              Сеты
            </Link>
            <Link to="#" class="btn link">
              Роллы и суши
            </Link>
            <Link to="#" class="btn link">
              WOK
            </Link>
            <Link to="#" class="btn link">
              Горячее и салаты
            </Link>
            <Link to="#" class="btn link">
              Десерты и напитки
            </Link>
            <Link to="#" class="btn link">
              Дополнительно
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
