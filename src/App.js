import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import NewMoviesForm from "./components/NewMoviesForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTimer, setRetryTimer] = useState(null);
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movies-f9af8-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying...");
      }
      const data = await response.json();
      const loadedMovies =[];
      for(const key in data){
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate,
        })
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
      retryFetch();
    }

    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMovieHandler();
  }, []);

  const retryFetch = () => {
    const timer = setTimeout(fetchMovieHandler, 5000);
    setRetryTimer(timer);
  };
  const cancelHandler = () => {
    clearTimeout(retryTimer);
    setIsLoading(false);
    setRetryTimer(null)
  };
  
  async function onAddNewMovie  (movie) {
    const response = await fetch(
      "https://react-movies-f9af8-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchMovieHandler()
  };

  let content = <p>Found No Movies...</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = (
      <p>
        {error}
        <button onClick={cancelHandler}>Cancel </button>
      </p>
    );
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <React.Fragment>
      <section>
        <NewMoviesForm onAdd={onAddNewMovie} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
