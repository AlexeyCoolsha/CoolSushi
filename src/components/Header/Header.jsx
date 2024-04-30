import React, { useState, useEffect } from "react";
import logo from "../../assets/img/coolSushiLogo/CoolSushiLogoNew.png";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import NavLink from "../UI/NavLink/NavLink";
import MenuItem from "../UI/MenuItem/MenuItem";

const Header = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  function changeMenuState() {
    setMenuIsOpened(!menuIsOpened);
  }

  useEffect(() => {
    document.body.classList.toggle('body-noscroll');
  }, [menuIsOpened])

  return (
    <div className="wrapper">
      <header className="header">
        <div
          className={`menu-mobile__container ${
            menuIsOpened ? " menu-mobile__container_active" : ""
          }`}
        >
          <div
            className="menu-mobile-background"
            onClick={changeMenuState}
          ></div>
          <div className={`menu-mobile${menuIsOpened ? " menu-active" : ""}`}>
            <div className="menu-mobile-top">
              <div className="menu-mobile-logo">
                <img src={logo} alt="logo" className="logo-img" />
              </div>
              <Button
                iconClass="fa-solid fa-xmark"
                classModifier="cross"
                eventHandler={changeMenuState}
              />
            </div>
            <div className="menu-mobile-content">
              <MenuItem
                href="#"
                iconClass="fa-solid fa-location-dot"
                text="Краснодар"
              ></MenuItem>
              <MenuItem
                href="#"
                iconClass="fa-regular fa-user"
                text="Войти"
              ></MenuItem>
              <MenuItem
                href="#"
                iconClass="fa-solid fa-book-open"
                text="Меню"
              ></MenuItem>
              <MenuItem
                href="#"
                iconClass="fa-solid fa-bag-shopping"
                text="Корзина"
              ></MenuItem>
              <MenuItem
                href="#"
                iconClass="fa-solid fa-fire"
                text="Акции"
              ></MenuItem>
            </div>
          </div>
        </div>

        <div className="header__top">
          <Button
            iconClass="fa-solid fa-bars"
            classModifier="btn-menu"
            eventHandler={changeMenuState}
          />

          <div className="city">
            <i className="fa-solid fa-location-dot"></i>
            <Link to="#" className="btn city-link">
              Краснодар
            </Link>
          </div>

          <div className="logo">
            <Link to="/home" className="btn">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>

          <div className="menu">
            <Button
              iconClass="fa-solid fa-magnifying-glass"
              classModifier="btn-search"
            />
            <Button
              iconClass="fa-regular fa-user"
              text="Войти"
              classModifier="btn-login"
            />
            <Button
              iconClass="fa-solid fa-bag-shopping"
              classModifier="btn-cart"
            />
          </div>
        </div>

        <div className="header__bottom">
          <nav className="header-nav" id="header-nav">
            <NavLink href="#">
              <i className="fa-solid fa-crown crown"></i>От шефа
            </NavLink>
            <NavLink href="#">Сеты</NavLink>
            <NavLink href="#">Роллы и суши</NavLink>
            <NavLink href="#">WOK</NavLink>
            <NavLink href="#">Горячее и салаты</NavLink>
            <NavLink href="#">Десерты и напитки</NavLink>
            <NavLink href="#">Дополнительно</NavLink>
          </nav>
        </div>
      </header>
      <p>
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />
        f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f<br />f
        <br />f<br />f<br />
      </p>
    </div>
  );
};

export default Header;
