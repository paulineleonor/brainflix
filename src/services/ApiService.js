import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633";

const ApiService = {
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

    await axios.post(
      `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`,
      newComment
    );

    event.target.reset();
    setInitialState(currentVideo.id);
  },

  deleteComment: async (currentVideo, comment, setInitialState) => {
    const commentId = comment.id;
    await axios.delete(
      `https://project-2-api.herokuapp.com/videos/${currentVideo.id}/comments/${commentId}/?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633`
    );
    setInitialState(currentVideo.id);
  },
};

export default ApiService;
