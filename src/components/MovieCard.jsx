/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import "./MovieCard.css";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie}) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt="image-poster"
      />
      <h5 className="movie-title-card">{movie.Title}</h5>
      <p className="movie-year">{movie.Year}</p>  
    </div>
  );
};

export default MovieCard;
