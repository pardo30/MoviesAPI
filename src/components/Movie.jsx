import React from 'react';
import Average from './Average';
import './Movie.scss';

const Movie = ({movie}) => {
  
  return (
        <div className="movie">
          <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
          <h5>{movie.title}</h5>
          <div className='average'>
            <Average average={movie.vote_average}/>
          </div>
        </div>
    )


}

export default Movie
