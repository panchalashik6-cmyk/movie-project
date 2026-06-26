import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../Redux/Thunk";
import MovieDetails from "./MovieDetails";

function MovieSearch() {

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state);

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    if (value !== "") {
      dispatch(searchMovie(value));
    }

  };

  return (
    <div className="container mt-4">

      <input
        type="text"
        className="form-control"
        placeholder="Search Movie..."
        value={search}
        onChange={handleSearch}
      />

      <div className="row mt-4">

        {loading && <h3>Loading...</h3>}

        {error && <h3>{error}</h3>}

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

export default MovieSearch;