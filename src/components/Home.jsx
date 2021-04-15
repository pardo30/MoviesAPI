import React from 'react';

import background from '../img/background_cinema.jpg';
import './Home.scss';

const Home = () => {



    return (
        <div className='home'>
        <h1>Base de datos de películas basada en TMDB</h1>
        <div className='background' style={{ backgroundImage: `url(${background})` }}></div>
        </div>
    )
}

export default Home
