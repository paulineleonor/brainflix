import { useNavigate } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className={props.buttonClass}
      onClick={() => {
        if (props.willRedirect) {
          navigate(props.destination);
        }
      }}
    >
      {props.buttonAction}
    </button>
  );
};

export default Button;
