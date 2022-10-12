import React from "react";
import LikeIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";
import { convertDate } from "../../utils/dates.mjs";
import "./VideoDetails.scss";

const VideoDetails = ({
  currentVideo: {
    title,
    channel,
    timestamp,
    likes,
    views,
    description,
    comments,
    id,
  },
}) => {
  const date = convertDate(timestamp);

  const videoDetailsContent = (
    <div className="videoDetails__container">
      <h1 className="videoDetails__title">{title}</h1>
      <div className="videoDetails__details">
        <div className="videoDetails__wrapper">
          <p className="videoDetails__channel">By {channel}</p>
          <p className="videoDetails__date">{date}</p>
        </div>
        <div className="videoDetails__wrapper videoDetails__wrapper--right">
          <div className="videoDetails__metrics videoDetails__metrics--left">
            <img
              src={ViewsIcon}
              alt="An eye icon"
              className="videoDetails__icon"
            />
            <p className="videoDetails__number">{views}</p>
          </div>
          <div className="videoDetails__metrics">
            <img
              src={LikeIcon}
              alt="A heart icon"
              className="videoDetails__icon"
              // onClick={() => likeHandler({ id })}
            />
            <p className="videoDetails__number">{likes}</p>
          </div>
        </div>
      </div>
      <p className="videoDetails__description">{description}</p>
      <p className="videoDetails__comments">{comments.length} Comments</p>
    </div>
  );

  return <section className="videoDetails">{videoDetailsContent}</section>;
};

export default VideoDetails;
