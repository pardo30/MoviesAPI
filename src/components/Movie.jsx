import React from 'react'

const Movie = ({movie}) => {
    return (
        <div className="movie">
          <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>  
          <h4>{movie.title}</h4>
          <div>{movie.vote_avergage}</div>
        </div>
    )
}

export default Movie
