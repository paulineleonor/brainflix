import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import Icon from "../../assets/Icons/search.svg";
import UploadIcon from "../../assets/Icons/upload.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" className="header__logo" />
      <div className="header__wrapper">
        <div className="header__search">
          {" "}
          <img src={Icon} alt="A search icon" className="header__icon" />
          <input className="header__input" placeholder="Search" />
        </div>
        <div className="header__avatar"></div>
      </div>
      <a href="#" className="button">
        <img src={UploadIcon} alt="A man" className="button__icon" />
        <p className="button__copy">Upload</p>
      </a>
    </header>
  );
};

export default Header;
