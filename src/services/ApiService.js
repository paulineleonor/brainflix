import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633";

const ApiService = {
  createComment: async (event, currentVideo) => {
    const newComment = {
      name: event.target.name.value,
      comment: event.target.name.value,
    };

    await axios.post(
      `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`,
      newComment
    );
  },

  // deleteComment = async (event, currentVideo) => {
  //   const newComment = {
  //     name: event.target.name.value,
  //     comment: event.target.name.value,
  //   };

  //   await axios.post(
  //     `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`,
  //     newComment
  //   );
  // };
};

export default ApiService;
