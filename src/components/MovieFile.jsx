import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Average from './Average';
import More18 from '../img/18.png';
import CancelIcon from '@material-ui/icons/Cancel';
import './MovieFile.scss';

const MovieFile = (props) => {
    const movieId = props.movieId;
    const [movie, setMovie] = useState([]);
    
    console.log(movieId);
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES&include_image_language=es`)
        .then(res => setMovie(res.data))
        .catch(error => console.error(error))
    },[movieId])

    return (
        <div className="popup">
        <div className="popup_inner">
            <div className="closeButton" onClick={props.showPopup}> <CancelIcon /> </div>
            <div className="box1">
                <div className="poster">
                    <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="Movie poster"/>
                </div>
                <div className="info">
                    <div className="data">
                        <Average average={movie.vote_average}/>
                        {movie.adult 
                            ? <img src={More18} alt ='adult content'/>
                            : null}
                        <h5 className='year'>  Fecha:  {movie.release_date}</h5>
                    </div>
                    <h4 className='title'>{movie.title}</h4>
                </div>
            </div>
            <div className="box2">
                {movie.budget 
                    ? <p>Presupuesto: {parseFloat(movie.budget)} $</p>
                    : null}
                {movie.overview
                    ?   <div><p>Descripción general:</p>
                        <p>{movie.overview}</p> </div>
                    : null}
            </div>
        </div>
        </div>
    )
}

export default MovieFile
