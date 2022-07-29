import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=bfc7972d";

// const movie1 = {
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   Title: "Batman Begins",
//   Type: "movie",
//   Year: "2005",
//   imdbID: "tt0372784",
// };

const App = () => {

  useEffect(() => {
    searchMovies("Pokemon");
  }, []);

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>Movie World</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

        {
            movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) =>  (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
              ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
              )
        }
    </div>
  );
};

export default App;
