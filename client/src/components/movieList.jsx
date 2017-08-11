import React from 'react';
import MovieItem from './movieItem.jsx';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  )
};

export default MovieList;
