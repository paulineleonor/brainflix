import axios from "axios";

const API_URL = "http://localhost:8080/videos";
const apiKey = "?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633";

const ApiService = {
  getVideos: async () => {
    return axios.get(`${API_URL}/${apiKey}`);
  },

  createComment: async (
    event,
    currentVideo,
    setFormHasError,
    setInitialState
  ) => {
    event.preventDefault();

    if (!event.target.comment.value) {
      setFormHasError(true);
      return;
    }

    const newComment = {
      name: "Mohan Muruge",
      comment: event.target.comment.value,
    };

    await axios.post(`${API_URL}/${currentVideo.id}/comments`, newComment);

    event.target.reset();
    setInitialState(currentVideo.id);
  },

  deleteComment: async (currentVideo, comment, getVideos) => {
    const commentId = comment.id;
    await axios.delete(`${API_URL}/${currentVideo.id}/comments/${commentId}`);
    getVideos(currentVideo.id);
  },

  updateLikes: async (currentVideo, getVideos) => {
    await axios.put(`${API_URL}/${currentVideo.id}/likes`);
    getVideos();
  },
};

export default ApiService;
