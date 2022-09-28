import React from "react";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikeIcon from "../../assets/Icons/likes.svg";
import convertDate from "../../utils/helper.mjs";

function VideoDetails(props) {
  const { title, channel, timestamp, likes, views, description, comments } =
    props.video;

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
          <div className="videoDetails__wrapper">
            <div className="views">
              <img src={ViewsIcon} alt="" className="views__icon" />
              <p className="views__count">{views}</p>
            </div>
            <div className="likes">
              <img src={LikeIcon} alt="" className="likes__icon" />
              <p className="likes__count">{likes}</p>
            </div>
          </div>
        </div>
        <p className="videoDetails__description">{description}</p>
        <p className="videoDetails__description">{comments.length} Comments</p>
      </div>
    </section>
  );
}

export default VideoDetails;
