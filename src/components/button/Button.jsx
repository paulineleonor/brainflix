import { useNavigate } from "react-router-dom";
import "./Button.scss";

const Button = ({ buttonClass, willRedirect, destination, buttonAction }) => {
  const navigate = useNavigate();

  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (willRedirect) {
          navigate(destination);
        }
      }}
    >
      {buttonAction}
    </button>
  );
};

export default Button;
