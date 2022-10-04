import React from "react";
import Hero from "../../components/hero/Hero";
import VideoInfo from "../../components/videoInfo/VideoInfo";

const HomePage = (props) => {
  console.log(props.currentVideo);
  return (
    <>
      <Hero currentVideo={props.currentVideo} />
      {/* <Hero video={currentVideo} /> */}
      <VideoInfo
        currentVideo={props.currentVideo}
        videos={props.sideVideos}
        // sidebarClickHandler={sidebarClickHandler}
      />
      {/* <Sidebar currentVideoId={props.currentVideo.id} videos={props.videos} /> */}
    </>
  );
};

export default HomePage;
