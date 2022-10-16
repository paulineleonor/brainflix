import React from "react";
import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./Sidebar.scss";

const Sidebar = ({ videos, currentVideoId }) => {
  const filteredVideos = videos.filter((video) => video.id !== currentVideoId);

  const sidebarContent = filteredVideos.map((video) => {
    return <SideBarVideo key={video.id} video={video} />;
  });

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Next videos</h2>
      {sidebarContent}
    </div>
  );
};

export default Sidebar;
