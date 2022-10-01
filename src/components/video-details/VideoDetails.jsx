import React from "react";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikeIcon from "../../assets/Icons/likes.svg";
import { convertDate } from "../../utils/date.mjs";
import Button from "../button/Button";
import "./VideoDetails.scss";

function VideoDetails({
  currentVideo: {
    title,
    channel,
    timestamp,
    likes,
    views,
    description,
    comments,
  },
}) {
  // const { title, channel, timestamp, likes, views, description, comments } =
  //   props.video;

  const date = convertDate(timestamp);

  return (
    <section className="videoDetails">
      <div className="videoDetails__container">
        <h1 className="videoDetails__title">{title}</h1>
        <div className="videoDetails__details">
          <div className="videoDetails__wrapper">
            <p className="videoDetails__channel">By {channel}</p>
            <p className="videoDetails__date">{date}</p>
          </div>
          <div className="videoDetails__wrapper videoDetails__wrapper--right">
            <div className="videoDetails__metrics videoDetails__metrics--left">
              <img src={ViewsIcon} alt="" className="videoDetails__icon" />
              <p className="videoDetails__number">{views}</p>
            </div>
            <div className="videoDetails__metrics">
              <img src={LikeIcon} alt="" className="videoDetails__icon" />
              <p className="videoDetails__number">{likes}</p>
            </div>
          </div>
        </div>
        <p className="videoDetails__description">{description}</p>
        <p className="videoDetails__comments">{comments.length} Comments</p>
      </div>
    </section>
  );
}

export default VideoDetails;
