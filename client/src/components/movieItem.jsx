import React from 'react';

const MovieItem = (props) => {
  return (
    <div>
      <p>{props.movie.title}</p>
    </div>
  )
};

export default MovieItem;
