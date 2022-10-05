import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=26689ce2-c1a8-4056-af4e-6d835c87e633";

export const getVideos = async () => {
  return axios.get(`${API_URL}/${apiKey}`);
};

export default API_URL;
