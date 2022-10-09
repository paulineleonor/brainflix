import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import VideoInfo from "../../components/videoInfo/VideoInfo";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState(null);

  const { videoId } = useParams();
  const location = useLocation();
  console.log(location);

  const setIntialState = async () => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );
    console.log(data);
    setSideVideos(data);

    console.log(videoId);

    const whichID = () => {
      if (location.pathname !== "/") {
        return videoId;
      } else {
        return data[0].id;
      }
    };

    let selectedVideo = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${whichID()}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    console.log("selected video", selectedVideo.data.comments);

    selectedVideo.data.comments.sort((a, b) =>
      a.timestamp < b.timestamp ? 1 : -1
    );

    setCurrentVideo(selectedVideo.data);
  };

  useEffect(() => {
    setIntialState();
  }, []);

  const getVideoDetails = async (id) => {
    const selectedVideo = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    selectedVideo.data.comments.sort((a, b) =>
      a.timestamp < b.timestamp ? 1 : -1
    );

    console.log(selectedVideo);

    setCurrentVideo(selectedVideo.data);
  };

  useEffect(() => {
    getVideoDetails(videoId);
  }, [videoId]);

  console.log(currentVideo);

  if (!currentVideo) {
    return <p>Loading</p>;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const newComment = {
      name: event.target.name.value,
      comment: event.target.name.value,
    };

    await axios.post(
      `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`,
      newComment
    );

    event.target.reset();
    getVideoDetails(currentVideo.id);
  };

  const deleteHandler = async (comment) => {
    const commentId = comment.id;

    await axios.delete(
      `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/${commentId}?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );

    getVideoDetails(currentVideo.id);
  };

  return (
    <>
      <Hero currentVideo={currentVideo} />
      <VideoInfo
        currentVideo={currentVideo}
        videos={sideVideos}
        submitHandler={submitHandler}
        getVideoDetails={getVideoDetails}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default HomePage;
