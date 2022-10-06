import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../../assets/Icons/search.svg";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  const buttonAction = "Upload";
  const navigate = useNavigate();

  const headerContent = (
    <section className="header__container">
      <NavLink to="/">
        {" "}
        <img
          src={Logo}
          alt=""
          className="header__logo"
          // onClick={() => {
          //   navigate("/");
          // }}
        />
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
