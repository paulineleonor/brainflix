import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import VideoInfo from "../../components/videoInfo/VideoInfo";
import ApiService from "../../services/ApiService";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState(null);
  const [formHasError, setFormHasError] = useState(false);

  const { videoId } = useParams();
  const location = useLocation();

  const getVideos = async (id) => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );
    setSideVideos(data);

    const whichID = () => {
      if (location.pathname !== "/") {
        return id;
      } else {
        return data[0].id;
      }
    };

    let selectedVideo = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${whichID()}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    selectedVideo.data.comments.sort((a, b) =>
      a.timestamp < b.timestamp ? 1 : -1
    );

    setCurrentVideo(selectedVideo.data);
  };

  useEffect(() => {
    getVideos(videoId);
  }, [videoId]);

  if (!currentVideo) {
    return <p>Loading</p>;
  }

  const submitHandler = async (event) => {
    ApiService.createComment(event, currentVideo, setFormHasError, getVideos);
  };

  const handleFormChange = (e) => {
    if (e.target.value.length > 0) {
      setFormHasError(false);
    }
  };

  const deleteHandler = async (comment) => {
    ApiService.deleteComment(currentVideo, comment, getVideos);
  };

  return (
    <>
      <Hero currentVideo={currentVideo} />
      <VideoInfo
        currentVideo={currentVideo}
        videos={sideVideos}
        submitHandler={submitHandler}
        getVideoDetails={getVideos}
        deleteHandler={deleteHandler}
        formHasError={formHasError}
        handleFormChange={handleFormChange}
      />
    </>
  );
};

export default HomePage;
