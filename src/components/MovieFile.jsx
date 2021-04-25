import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Average from './Average';
import More18 from '../img/18.png';
import emptyMovie from '../img/empty_movie.png'
import CancelIcon from '@material-ui/icons/Cancel';
import './MovieFile.scss';

const MovieFile = (props) => {
    const movieId = props.movieId;
    const [movie, setMovie] = useState([]);
    
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES&include_image_language=es`)
        .then(res => setMovie(res.data))
        .catch(error => console.error(error))
    },[movieId])
    
    const year = String(movie.release_date);

    const genres = movie.genres
  

    const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const budget = numberFormat.format(parseFloat(movie.budget))

    return (
        <div className='popup'>
        <div className='popup_inner'>
            <div className='closeButton' onClick={props.showPopup}> <CancelIcon /> </div>
            <div className='content'>
                <div className='box1'>
                    <div className='poster'>
                        {movie.poster_path
                          ? <img src={'https://image.tmdb.org/t/p/w185'+movie.poster_path} alt='Movie poster'/>
                          : <img src={emptyMovie} alt='empty movie poster'/>}
                    </div>
                    <div className='data'>
                        <h5 className='year'>{year.substr(0,4)}</h5>
                        <h5 className='runtime'>{movie.runtime} min</h5>
                        <Average average={movie.vote_average}/>
                    </div>
                    {movie.budget 
                        ? <h5 className='budget'>Presupuesto:  {budget}</h5>
                        : null}
                </div>
                <div className='box2'>
                    <div className='info'>
                        <h4 className='title'>{movie.title}</h4>
                        <h5 className='originalTitle'>"{movie.original_title}"</h5>
                        {movie.adult 
                            ? <img src={More18} alt ='adult content'/>
                            : null}
                        {movie.tagline
                            ? <div className='tagline'>{movie.tagline}</div>
                            : null}
                    </div>
                    <p className='descriptionMovie description'>Descripción general:</p>
                    {movie.overview
                        ?   <div className='overview'>{movie.overview}</div>
                        :   <div className='overview'>No existe descripción para esta película</div>}
                    <p className='descriptionGenre descriotion'>Géneros:</p>
                    <div className="genres">
                        {movie.genres
                        ?  genres.map(genre => <div className='genre' key={genre.name}>{genre.name}</div>)
                        : <div className='overview'>No se han definido géneros para esta película</div>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MovieFile
