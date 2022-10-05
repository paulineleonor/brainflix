import React from "react";
import Hero from "../../components/hero/Hero";
import VideoInfo from "../../components/videoInfo/VideoInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState(null);

  const { videoId } = useParams();

  const setIntialState = async () => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    setSideVideos(data);

    const selectedVideo = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${data[0].id}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    console.log("selected video", selectedVideo);

    setCurrentVideo(selectedVideo.data);
  };

  useEffect(() => {
    setIntialState();
  }, []);

  const getVideoDetails = async (id) => {
    const selectedVideo = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    setCurrentVideo(selectedVideo.data);
  };

  useEffect(() => {
    getVideoDetails(videoId);
  }, [videoId]);

  console.log(currentVideo);

  if (!currentVideo) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Hero currentVideo={currentVideo} />
      <VideoInfo currentVideo={currentVideo} videos={sideVideos} />
    </>
  );
};

export default HomePage;
