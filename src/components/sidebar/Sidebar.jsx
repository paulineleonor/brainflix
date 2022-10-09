import React from "react";
import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./Sidebar.scss";

const Sidebar = (props) => {
  const filteredVideos = props.videos.filter(
    (video) => video.id !== props.currentVideoId
  );

  const sidebarContent = filteredVideos.map((video) => {
    return (
      <SideBarVideo
        key={video.id}
        video={video}
        sidebarClickHandler={props.sidebarClickHandler}
      />
    );
  });

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Next videos</h2>
      {sidebarContent}
    </div>
  );
};

export default Sidebar;
