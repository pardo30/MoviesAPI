import React from 'react';
import { NavLink } from 'react-router-dom';
import indexGif from '../../img/index.gif'
import './Home.scss';

const Home = () => {

    return (
        <div className='home'>
            <h1>Base de datos de peliculas basada en TMDB</h1>
            <NavLink to='/search/movie'>
            <img src={indexGif} alt="Gif CountDown"/>
            </NavLink>
        </div>
    )
}

export default Home
