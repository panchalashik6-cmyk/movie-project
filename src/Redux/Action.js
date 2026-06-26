// Action Types
export const LOADING = "LOADING";
export const GET_MOVIES = "GET_MOVIES";
export const ERROR = "ERROR";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ADD_FAVORITE = "ADD_FAVORITE";

// Actions
export const loading = () => {
  return {
    type: LOADING,
  };
};

export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const error = (msg) => {
  return {
    type: ERROR,
    payload: msg,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
};