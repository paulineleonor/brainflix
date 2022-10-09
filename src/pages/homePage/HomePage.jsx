import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Hero from "../../components/Hero/Hero";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import ApiService from "../../services/ApiService";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState(null);
  const [formHasError, setFormHasError] = useState(false);

  const { videoId } = useParams();
  const location = useLocation();

  // Retrieve all video data from API and set current video
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
    return (
      <div className="loader">
        <BounceLoader color="#0095ff" />
      </div>
    );
  }

  // Handles new comment submission, checks for form errors and rerenders list of comments
  const submitHandler = async (event) => {
    ApiService.createComment(event, currentVideo, setFormHasError, getVideos);
  };

  // Removes form error state when input is no longer empty
  const handleFormChange = (e) => {
    if (e.target.value.length > 0) {
      setFormHasError(false);
    }
  };

  // Handles comment deletion and rerenders list of comments
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
