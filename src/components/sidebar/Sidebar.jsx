import React from "react";
import SideBarVideo from "../sidebarvideo/SideBarVideo";
import "./Sidebar.scss";
import { useState, useEffect } from "react";
import { getVideos } from "../../utils/api.mjs";
import axios from "axios";

const Sidebar = (props) => {
  const [videosArray, setVideosArray] = useState([]);

  const getVideosArray = async () => {
    const { data } = await getVideos();
    console.log(data);
    setVideosArray(data);
  };

  useEffect(() => {
    getVideosArray();
  }, []);

  if (!videosArray.length > 0) {
    return <p>Loading</p>;
  }

  const filteredVideos = videosArray.filter(
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
