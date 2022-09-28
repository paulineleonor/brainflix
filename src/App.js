import { useState } from "react";
import Header from "./components/header/Header";
import VideoContent from "./components/video-section/VideoContent";
import Form from "./components/form/Form";
import Comments from "./components/comments/Comments";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import "./styles/main.scss";

function App() {
  console.log(videoDetails[0].id);
  // const [currentVideoId, setCurrentVideoId] = useState[videoDetails[0].id];

  return (
    <>
      <Header />
      <VideoContent videoDetails={videoDetails} />
      <Form />
      <Comments videoDetails={videoDetails} />
    </>
  );
}

export default App;
