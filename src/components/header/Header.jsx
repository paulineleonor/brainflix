import "./Header.scss"

const Header = (props) => {
    return (
      <header className="header">
          <img src={props.logo} alt="" className="header__logo" />
          <div className="header__wrapper">
            <div className="header__search">        <img src={props.icon} alt="A search icon" className="header__icon" />
            <input className="header__input" placeholder="Search" /></div>

            <img src={props.avatar} alt="A man" className="header__avatar" />

            </div>
            <a href="#" className="button">
<img src={props.uploadIcon} alt="A man" className="header__avatar" />
  <p className="button__copy">Upload</p>
</a>
      </header>
    );
  };
  
  export default Header;
  