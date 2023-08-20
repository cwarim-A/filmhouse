import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/Ai";
import "./MovieDetails.css";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { moviesid } = useParams();

  const fetchMovieDetails = async (moviesid) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${moviesid}&apikey=d1b90b0d`
    );
    const data = await response.json();
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails(moviesid);
  }, [moviesid]);

  return (
    <>
      <h1 className="header">FilmHouse</h1>
      <Link to={"/"}>
        <button className="back-btn">Back</button>
      </Link>
      {movieDetails && (
        <div className="movie-details">
          <img
            className="movie-image"
            src={movieDetails.Poster}
            alt="movie-image"
          />
          <div className="movie-content">
            <h1>{movieDetails.Title}</h1>
            <div className="rating">
              <h4>Rating</h4>
              <p>
                {movieDetails.imdbRating} <AiFillStar size={13} />
              </p>
            </div>
            <div className="sub-movie-content">
              <p className="year">
                <span>Year</span>
                {movieDetails.Year}
              </p>
              <p className="length">
                <span>Length</span>
                {movieDetails.Runtime}
              </p>
              <p className="language">
                <span>Language</span>
                {movieDetails.Language}
              </p>
              <p className="release-date">
                <span>Date of Release</span>
                {movieDetails.Released}
              </p>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <p>{movieDetails.Plot}</p>
            </div>
            <div className="genre">
              <h3>Genre</h3>
              <p>{movieDetails.Genre}</p>
            </div>
            <div className="actors">
              <h3>Actors</h3>
              <p>{movieDetails.Actors}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
