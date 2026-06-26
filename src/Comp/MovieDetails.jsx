import { useDispatch } from "react-redux";
import { addFavorite } from "../Redux/Action";

function MovieDetails({ movie }) {

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(movie));
    alert("Movie Added Successfully");
  };

  return (
    <div className="col-md-4 mb-4">

      <div className="card h-100 shadow">

        <img
          src={movie.poster}
          alt={movie.title}
          className="card-img-top"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="card-body">

          <h4>{movie.title}</h4>

          <p><b>Language :</b> {movie.language}</p>

          <p><b>Rating :</b> ⭐ {movie.rating}</p>

          <p>{movie.description}</p>

          <p><b>Genre :</b> {movie.genre}</p>

          <p><b>Cast :</b> {movie.cast}</p>

          <p><b>Release :</b> {movie.releaseDate}</p>

          <button
            className="btn btn-success w-100"
            onClick={handleFavorite}
          >
            Add Favorite
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;