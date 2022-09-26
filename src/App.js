import "./App.css";
import Header from "./components/header/Header";
import Logo from "./assets/Logo/BrainFlix-logo.svg";
import Avatar from "./assets/Images/Mohan-muruge.jpg";
import Icon from "./assets/Icons/search.svg";
import UploadIcon from "./assets/Icons/upload.svg";

function App() {
  return (
    <>
      <Header logo={Logo} avatar={Avatar} icon={Icon} uploadIcon={UploadIcon} />
    </>
  );
}

export default App;
