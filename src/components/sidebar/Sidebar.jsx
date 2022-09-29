import React from "react";
import SideBarVideo from "../sidebarvideo/SideBarVideo";
import "./Sidebar.scss";

function Sidebar(props) {
  const filteredVideos = props.videos.filter(
    (video) => video.id !== props.currentVideoId
  );
  console.log(filteredVideos);

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Next videos</h2>
      {filteredVideos.map((video) => {
        return (
          <SideBarVideo
            key={video.id}
            video={video}
            sidebarClickHandler={props.sidebarClickHandler}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
