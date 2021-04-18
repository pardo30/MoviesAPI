import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import emptyMovie from '../../img/empty_movie.png'
import './Home.scss';

const Home = () => {

const [latest, setLatest] = useState([]);

useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES`)
    .then(res => setLatest(res.data))
    .catch(error => console.error(error))
},[])

const year = String(latest.release_date);
    

    return (
        <div className='home'>
            <NavLink to='/search/movie'>
                <h1>Base de datos de peliculas basada en TMDB</h1>
            </NavLink>
            <h3>Última película añadida</h3>
            <div className="latest">
                {latest.poster
                    ? <img src={"https://image.tmdb.org/t/p/w185"+latest.poster_path} alt="Movie poster"/>
                    : <img src={emptyMovie} alt='empty movie poster'/>}
                <h4 className='titleMovie'>
                    {latest.title} 
                    {latest.release_date
                        ? <h4>({year.substr(0,4)})</h4>
                        : null}
                </h4>
            </div>

        </div>
    )
}

export default Home
