import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import VideoInfo from "./components/videoInfo/VideoInfo";
import VideoDetails from "./components/video-details/VideoDetails";
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
      <Hero video={currentVideo} />
      <VideoInfo
        currentVideo={currentVideo}
        videos={sideVideos}
        sidebarClickHandler={sidebarClickHandler}
      />
      {/* <section className="video-info">
        <div className="video-info__wrapper">
          <div className="video-info__container">
            <VideoDetails video={currentVideo} />
            <Form />
            <Comments video={currentVideo} />
          </div>
          <Sidebar
            currentVideoId={currentVideo.id}
            videos={sideVideos}
            sidebarClickHandler={sidebarClickHandler}
          />
        </div>
      </section> */}
    </>
  );
}

export default App;
