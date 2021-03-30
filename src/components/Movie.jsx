import React from 'react';
import Average from './Average';
import './Movie.scss';

const Movie = ({movie}) => {
  
  return (
        <div className='movie' >
          <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
          <div className='line1'>
            <h6 className='year'>{movie.release_date.substr(0,4)}</h6>
            <div className='average'>
              <Average average={movie.vote_average}/>
            </div>
          </div>
          <h5 className='title'>{movie.title}</h5>
        </div>
    )


}

export default Movie
