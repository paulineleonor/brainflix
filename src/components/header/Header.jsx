import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/search.svg";
import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  const buttonAction = "Upload";

  return (
    <header className="header">
      <section className="header__container">
        <img src={Logo} alt="" className="header__logo" />
        <div className="header__wrapper">
          <div className="search">
            <div className="search__form">
              <img src={Icon} alt="A search icon" className="search__icon" />
              <input className="search__input" placeholder="Search" />
            </div>
            <div className="search__avatar">
              <div className="search__image"></div>
            </div>
          </div>
          <Button
            buttonClass="button button--search"
            buttonAction={buttonAction}
          />
          <div className="header__avatar">
            <div className="header__image"></div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
