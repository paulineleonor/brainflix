import React from "react";
import Comments from "../comments/Comments";
import Form from "../form/Form";
import Sidebar from "../sidebar/Sidebar";
import VideoDetails from "../video-details/VideoDetails";
import "./VideoInfo.scss";

const VideoInfo = (props) => {
  return (
    <section className="video-info">
      <div className="video-info__wrapper">
        <div className="video-info__container">
          <VideoDetails currentVideo={props.currentVideo} />
          <Form
            currentVideo={props.currentVideo}
            getVideoDetails={props.getVideoDetails}
            submitHandler={props.submitHandler}
            formHasError={props.formHasError}
            handleFormChange={props.handleFormChange}
          />
          <Comments
            video={props.currentVideo}
            deleteHandler={props.deleteHandler}
          />
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
