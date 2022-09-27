import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/search.svg";
import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <img src={Logo} alt="" className="header__logo" />
        <div className="header__wrapper">
          <div className="form">
            <div className="form__search">
              <img src={Icon} alt="A search icon" className="form__icon" />
              <input className="form__input" placeholder="Search" />
            </div>
            <div className="form__avatar">
              <div className="form__image"></div>
            </div>
          </div>
          <Button />
          <div className="header__avatar">
            <div className="header__image"></div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
