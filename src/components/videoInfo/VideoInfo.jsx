import React from "react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import Sidebar from "../Sidebar/Sidebar";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoInfo.scss";

const VideoInfo = ({
  currentVideo,
  likeHandler,
  getVideoDetails,
  submitHandler,
  formHasError,
  handleFormChange,
  deleteHandler,
  videos,
}) => {
  return (
    <section className="video-info">
      <div className="video-info__wrapper">
        <div className="video-info__container">
          <VideoDetails currentVideo={currentVideo} likeHandler={likeHandler} />
          <Form
            currentVideo={currentVideo}
            getVideoDetails={getVideoDetails}
            submitHandler={submitHandler}
            formHasError={formHasError}
            handleFormChange={handleFormChange}
          />
          <Comments video={currentVideo} deleteHandler={deleteHandler} />
        </div>
        <Sidebar currentVideoId={currentVideo.id} videos={videos} />
      </div>
    </section>
  );
};

export default VideoInfo;
