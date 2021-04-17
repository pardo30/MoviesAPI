import React, { useState } from 'react';
import Average from './Average';
import './Movie.scss';
import MovieFile from './MovieFile';

const Movie = ({movie}) => {
  const [showPopup, setShowPopup] = useState(false)
  


  return (
        <div className='movie' onClick={()=>setShowPopup(!showPopup)}>
          <div className='img-box'>
            <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
          </div>
          <div className='line1'>
            <h6 className='year'>{movie.release_date.substr(0,4)}</h6>
            <div className='average'>
              <Average average={movie.vote_average}/>
            </div>
          </div>
          <h5 className='titleMovie'>{movie.title}</h5>
          {showPopup 
            ? <MovieFile movieId={movie.id} showPopup={()=>setShowPopup(!showPopup)}/>
            : null 
          }
        </div>
    )


}

export default Movie
