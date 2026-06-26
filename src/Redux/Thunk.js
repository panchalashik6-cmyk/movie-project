import {
  loading,
  getMovies,
  error,
} from "./Action";

import {
  getPopularMovies,
  searchMovies,
} from "../Api";

// Popular Movies
export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const res = await getPopularMovies();

      dispatch(getMovies(res.data));   // <-- Change

    } catch (err) {
      dispatch(error("Movies Not Found"));
      console.log(err);
    }
  };
};

// Search Movies
export const searchMovie = (name) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const res = await searchMovies(name);

      dispatch(getMovies(res.data));   // <-- Change

    } catch (err) {
      dispatch(error("Movie Not Found"));
      console.log(err);
    }
  };
};