import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Average from './Average';
import More18 from '../img/18.png';
//import './Home.scss';

const Home = () => {

const [movie, setMovie] = useState([]);


useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES`)
    .then(res => setMovie(res.data))
    .catch(error => console.error(error))
},[movie])

const year = String(movie.release_date);

const genres = movie.genres


const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const budget = numberFormat.format(parseFloat(movie.budget))
    return (
        <div>
            HOLA MUNDO
            <div className='content'>
                <div className='box1'>
                    <div className='poster'>
                        <img src={'https://image.tmdb.org/t/p/w185'+movie.poster_path} alt='Movie poster'/>
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
                        <h5 className='originalTitle'>{movie.original_title}</h5>
                        {movie.adult 
                            ? <img src={More18} alt ='adult content'/>
                            : null}
                    </div>
                    <p className='description'>Descripción general:</p>
                    {movie.overview
                        ?   <div className='overview'>{movie.overview}</div>
                        :   <div className='overview'>No existe descripción para esta película</div>}
                    <p className='description'>Géneros:</p>
                    <div className="genres">
                        {movie.genres
                        ?  genres.map(genre => <div className='genre'>{genre.name}</div>)
                        : <div className='overview'>No se han definido géneros para esta película</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
