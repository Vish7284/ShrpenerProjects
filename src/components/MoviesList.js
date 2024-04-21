import React ,{useState}from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const [movies ,setMovies] = useState(props.movies)
  const deleteHandler = async (id)=>{
   try { await fetch(
      `https://react-movies-f9af8-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,{
        method:"DELETE"
      }
    );
    const updatedList = movies.filter((mivi) => mivi.id !== id);
    setMovies(updatedList);
}catch(error){
  console.log("error deleteing movies",error);


  
}
    
  }
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <button onClick={()=>deleteHandler(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
