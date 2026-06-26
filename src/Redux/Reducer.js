import {
  LOADING,
  GET_MOVIES,
  ERROR,
  LOGIN,
  LOGOUT,
  ADD_FAVORITE,
} from "./Action";

const initialState = {
  loading: false,
  movies: [],
  error: "",
  isLogin: false,
  favorites: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
}

export default Reducer;