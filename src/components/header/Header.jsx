import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/search.svg";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";
import "./Header.scss";

const Header = () => {
  const buttonAction = "Upload";

  const headerContent = (
    <section className="header__container">
      <img src={Logo} alt="" className="header__logo" />
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
