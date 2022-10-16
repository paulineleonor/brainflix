import axios from "axios";

export const API_URL = `${process.env.REACT_APP_BACKEND_URL}/videos`;

const ApiService = {
  getVideos: async () => {
    return axios.get(`${API_URL}`);
  },

  createComment: async (
    event,
    currentVideo,
    setFormHasError,
    setInitialState
  ) => {
    try {
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
    } catch (error) {
      alert("Error, cannot post comment");
    }
  },

  deleteComment: async (currentVideo, comment, getVideos) => {
    try {
      const commentId = comment.id;
      await axios.delete(`${API_URL}/${currentVideo.id}/comments/${commentId}`);
      getVideos(currentVideo.id);
    } catch (error) {
      alert("Error, cannot delete comment");
    }
  },

  updateLikes: async (currentVideo, getVideos) => {
    try {
      await axios.put(`${API_URL}/${currentVideo}/likes`);
      getVideos(currentVideo);
    } catch (error) {
      alert("Error, cannot like video");
    }
  },
};

export default ApiService;
