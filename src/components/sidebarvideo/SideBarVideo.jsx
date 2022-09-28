import React from "react";
import "./SideBarVideo.scss";

const SideBarVideo = (props) => {
  return (
    <article
      onClick={() => {
        props.sidebarClickHandler(props.video.id);
      }}
      className="sidebar"
    >
      <img
        src={props.video.image}
        alt={props.video.title}
        className="sidebar__image"
      />
      <div className="sidebar__wrapper">
        {" "}
        <p className="sidebar__name">{props.video.title}</p>
        <p className="sidebar__name">{props.video.channel}</p>
      </div>
    </article>
  );
};

export default SideBarVideo;
