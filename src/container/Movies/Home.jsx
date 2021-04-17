import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Home.scss';

const Home = () => {

const [latest, setLatest] = useState([]);

useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES`)
    .then(res => setLatest(res.data))
    .catch(error => console.error(error))
},[])
    

    return (
        <div className='home'>
            <NavLink to='/search/movie'>
                <h1>Base de datos de peliculas basada en TMDB</h1>
            </NavLink>
            <h3>Última película añadida</h3>
            <div className="latest">
                <img src={"https://image.tmdb.org/t/p/w185"+latest.poster_path} alt="Movie poster"/>
                <h5 className='titleMovie'>{latest.title}</h5>
            </div>

        </div>
    )
}

export default Home
