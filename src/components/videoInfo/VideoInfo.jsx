import React from "react";
import VideoDetails from "../video-details/VideoDetails";
import Form from "../form/Form";
import Comments from "../comments/Comments";
import Sidebar from "../sidebar/Sidebar";
import "./VideoInfo.scss";

const VideoInfo = (props) => {
  return (
    <section className="video-info">
      <div className="video-info__wrapper">
        <div className="video-info__container">
          <VideoDetails currentVideo={props.currentVideo} />
          <Form />
          <Comments video={props.currentVideo} />
        </div>
        <Sidebar
          currentVideoId={props.currentVideo.id}
          videos={props.videos}
          sidebarClickHandler={props.sidebarClickHandler}
        />
      </div>
    </section>
  );
};

export default VideoInfo;
