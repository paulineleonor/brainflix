import "./Button.scss";

const Button = (props) => {
  return <button className={props.buttonClass}>{props.buttonAction}</button>;
};

export default Button;
