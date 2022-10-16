import React from "react";
import { Link } from "react-router-dom";

import "./SideBarVideo.scss";

const SideBarVideo = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="link">
      <article className="sidebar__video">
        <div className="sidebar__container">
          <img src={video.image} alt="" className="sidebar__image" />
        </div>
        <div className="sidebar__wrapper">
          <p className="sidebar__name">{video.title}</p>
          <p className="sidebar__channel">{video.channel}</p>
        </div>
      </article>
    </Link>
  );
};

export default SideBarVideo;
