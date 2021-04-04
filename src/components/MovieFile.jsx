import React from 'react'
import Average from './Average'

const MovieFile = ({movie}) => {
    return (
        <div className="popup">
            <button className="closeButton" onClick={showPopup}> <<< </button>
            <div className="box1">
                <div className="poster">
                    <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
                </div>
                <div className="info">
                    <Average average={movie.vote_average}/>
                    {movie-adult}
                    <h6 className='year'>{movie.release_date.substr(0,4)}</h6>
                    <h5 className='title'>{movie.title}</h5>
                </div>
            </div>
            <div className="box2">
            <h6>Presupuesto: {movie.budget} $</h6>
            <h6>Géneros:</h6>
                {movie.generes.name}
            <h6>Descripción general:</h6>
                {movie.overview}
            </div>
        </div>
    )
}

export default MovieFile
