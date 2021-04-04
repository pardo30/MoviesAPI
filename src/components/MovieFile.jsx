import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Average from './Average';
import './MovieFile.scss';

const MovieFile = (props) => {
    const movieId = props.movieId;
    const [movie, setMovie] = useState([]);
    console.log(movieId);
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6db8b1cae4de7ed79b6af06f87c63d15`)
        .then(res => setMovie(res.data))
        .catch(error => console.error(error))
    },[movieId])

    return (
        <div className="popup">
        <div className="popup_inner">
            <button className="closeButton" onClick={props.showPopup}> X </button>
            <div className="box1">
                <div className="poster">
                    {/* <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/> */}
                </div>
                <div className="info">
                    <Average average={movie.vote_average}/>
                    {movie.adult}
                    {/* <h6 className='year'>{movie.release_date.substr(0,4)}</h6> */}
                    <h5 className='title'>{movie.title}</h5>
                </div>
            </div>
            <div className="box2">
            <h6>Presupuesto: {movie.budget} $</h6>
            <h6>Géneros:</h6>
                {/* {movie.generes.name} */}
            <h6>Descripción general:</h6>
                {movie.overview}
            </div>
        </div>
        </div>
    )
}

export default MovieFile
