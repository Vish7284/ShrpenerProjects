import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import NewMoviesForm from "./components/NewMoviesForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTimer,setRetryTimer] = useState(null)
  const fetchMovieHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try {
      const respose = await fetch("https://swapi.dev/api/films");
      if (!respose.ok) {
        throw new Error("Something went wrong....Retrying...");
      }
      const data = await respose.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
      retryFetch();
    }

    setIsLoading(false);
  });
  useEffect(()=>{
    fetchMovieHandler();
  },[])

  const retryFetch =()=>{
const timer = setTimeout(fetchMovieHandler,5000);
setRetryTimer(timer);
  }
  const cancelHandler =()=>{
    clearTimeout(retryTimer);
    setIsLoading(false)
  }

  let  content = <p>Found No Movies...</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}<button onClick={cancelHandler}>Cancel </button></p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const onAddNewMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <React.Fragment>
      <section><NewMoviesForm onAdd={onAddNewMovie} /></section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
