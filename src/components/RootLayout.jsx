import { useState, useEffect } from "react";

import Searchbar from "./Searchbar";
import MovieCard from "./MovieCard";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=d1b90b0d";

const RootLayout = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("john wick");
  }, []);

  return (
    <div>
      <div>
        <Searchbar
          searchMovies={searchMovies}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          movies={movies}
          setMovies={setMovies}
        />
        {movies?.length > 0 ? (
          <div className="trending-movies">
            <div className="movie-card-group">
              {movies.map((movie) => (
               // eslint-disable-next-line react/jsx-key
               <Link to={`/moviesDetails/${movie.imdbID}`} key={movie.imdbID}>
                <MovieCard movie={movie}  />
               </Link>
              ))}
            </div>
          </div>
        ) : (
         <div className="No-image">
           <h1>No Movie Found!</h1> 
         </div>
        )}
      </div>
    </div>
  );
};

export default RootLayout;
