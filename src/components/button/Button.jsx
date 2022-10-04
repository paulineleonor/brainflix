import "./Button.scss";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className={props.buttonClass}
      onClick={() => {
        navigate(props.destination);
      }}
    >
      {props.buttonAction}
    </button>
  );
};

export default Button;
