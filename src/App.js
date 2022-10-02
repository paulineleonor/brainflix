import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import VideoInfo from "./components/videoInfo/VideoInfo";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import "./App.scss";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const [sideVideos, setSideVideos] = useState(videos);

  const sidebarClickHandler = (videoId) => {
    const newVideo = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(newVideo);
  };

  return (
    <>
      <Header />
      <Hero video={currentVideo} />
      <VideoInfo
        currentVideo={currentVideo}
        videos={sideVideos}
        sidebarClickHandler={sidebarClickHandler}
      />
    </>
  );
}

export default App;
