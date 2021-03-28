import React from 'react';
import './Movie.scss';

const Movie = ({movie}) => {
  // const color = () => {
  //   const average = {movie.vote_average};
  //   if (average >= 9) {
  //     return "#00B24F"
  //   } elseif (average < 9 && average >= 8) {
  //     return "#92D04F"
  //   } elseif (average < 8 && average >= 6) {
  //     return "#FFFE01"
  //   } elseif (average < 6 && average >= 5) {
  //     return "FEC000"
  //   }elseif (average < 5  && average >=3) {
  //     return "FEC000"
  //   } else {
  //     return "FE0001"
  //   }
  // }  
  return (
        <div className="movie">
          <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
          <h5>{movie.title}</h5>
          <div className='average' style={{border: `5px solid white`}}>
            <p>{movie.vote_average}</p>
          </div>
        </div>
    )


}

export default Movie
