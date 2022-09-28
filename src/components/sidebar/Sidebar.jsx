import React from "react";
import SideBarVideo from "../sidebarvideo/SideBarVideo";
import { useState } from "react";

function Sidebar(props) {
  const filteredVideos = props.videos.filter(
    (video) => video.id !== props.currentVideoId
  );
  console.log(filteredVideos);

  return (
    <div className="side-profiles">
      <ul>
        {filteredVideos.map((video) => {
          return (
            <SideBarVideo
              key={video.id}
              video={video}
              sidebarClickHandler={props.sidebarClickHandler}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
