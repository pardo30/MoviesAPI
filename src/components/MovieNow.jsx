import React, { useState } from 'react';
import './Movie.scss';
import MovieFile from './MovieFile';

const Movie = ({movie}) => {
  const [showPopup, setShowPopup] = useState(false)
  


  return (
        <div className='movieNow' onClick={()=>setShowPopup(!showPopup)}>
          <div className='img-box'>
            <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
          </div>
          {/* <h5 className='title'>{movie.title}</h5> */}
          {showPopup 
            ? <MovieFile movieId={movie.id} showPopup={()=>setShowPopup(!showPopup)}/>
            : null 
          }
        </div>
    )


}

export default Movie
