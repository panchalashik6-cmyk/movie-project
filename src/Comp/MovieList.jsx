import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/Thunk";
import MovieDetails from "./MovieDetails";

function MovieList() {

  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  return (
    <div className="container mt-4">

      <div className="row">

        {movies.map((movie) => (
          <MovieDetails
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
}

export default MovieList;