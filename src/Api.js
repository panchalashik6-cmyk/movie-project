import axios from "axios";

const URL = "http://localhost:3001/movies";

export const getPopularMovies = () => {
  return axios.get(URL);
};

export const searchMovies = (name) => {
  return axios.get(`${URL}?title_like=${name}`);
};