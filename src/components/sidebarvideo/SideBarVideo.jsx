import React from "react";
import "./SideBarVideo.scss";

const SideBarVideo = (props) => {
  return (
    <article
      onClick={() => {
        props.sidebarClickHandler(props.video.id);
      }}
      className="sidebar__video"
    >
      <div className="sidebar__container">
        <img src={props.video.image} alt="" className="sidebar__image" />
      </div>
      <div className="sidebar__wrapper">
        <p className="sidebar__name">{props.video.title}</p>
        <p className="sidebar__name">{props.video.channel}</p>
      </div>
    </article>
  );
};

export default SideBarVideo;
