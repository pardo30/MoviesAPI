import React from 'react';
import './Title.scss';
import movieImg from '../img/movie.png';

const Title = () => {
    return (
        <div className='title'>
            <img src={movieImg} alt="Imagen de rollo de pelicula"/>
            <h1> Base de datos de películas</h1>
        </div>
    )
}

export default Title
