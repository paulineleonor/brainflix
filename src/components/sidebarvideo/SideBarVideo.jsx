import React from "react";
import { Link } from "react-router-dom";

import "./SideBarVideo.scss";

const SideBarVideo = (props) => {
  return (
    <Link to={`/video/${props.video.id}`} className="link">
      <article className="sidebar__video">
        <div className="sidebar__container">
          <img src={props.video.image} alt="" className="sidebar__image" />
        </div>
        <div className="sidebar__wrapper">
          <p className="sidebar__name">{props.video.title}</p>
          <p className="sidebar__channel">{props.video.channel}</p>
        </div>
      </article>
    </Link>
  );
};

export default SideBarVideo;
