import { NavLink } from "react-router-dom";
import Icon from "../../assets/Icons/search.svg";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  const buttonAction = "Upload";

  const headerContent = (
    <section className="header__container">
      <NavLink to="/">
        <img src={Logo} alt="" className="header__logo" />
      </NavLink>
      <div className="header__wrapper">
        <div className="search">
          <div className="search__form">
            <img src={Icon} alt="A search icon" className="search__icon" />
            <input className="search__input" placeholder="Search" />
          </div>
          <Avatar
            avatarClass="avatar avatar--mobile"
            imageClass="avatar__image"
          />
        </div>
        <Button
          buttonClass="button button--search"
          buttonAction={buttonAction}
          destination="/upload"
          willRedirect={true}
        />
        <Avatar
          avatarClass="avatar avatar--desktop"
          imageClass="avatar__image"
        />
      </div>
    </section>
  );

  return <header className="header">{headerContent}</header>;
};

export default Header;
