import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Upload from "./pages/upload/Upload";

function App() {
  // const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  // const [sideVideos, setSideVideos] = useState(videos);
  // console.log(currentVideo);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="video/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
