import { useState } from "react";
import Header from "./components/header/Header";
import VideoContent from "./components/video-section/VideoContent";
import Form from "./components/form/Form";
import Comments from "./components/comments/Comments";
import Sidebar from "./components/sidebar/Sidebar";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import "./styles/main.scss";

function App() {
  console.log(videoDetails[0].id);
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const [sideVideos, setSideVideos] = useState(videos);

  const sidebarClickHandler = (videoId) => {
    const newVideo = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(newVideo);
  };

  return (
    <>
      <Header />
      <VideoContent video={currentVideo} />
      {/* <VideoContent videoDetails={videoDetails} /> */}
      <Form />
      <Comments video={currentVideo} />
      <Sidebar
        currentVideoId={currentVideo.id}
        videos={sideVideos}
        sidebarClickHandler={sidebarClickHandler}
      />
    </>
  );
}

export default App;
