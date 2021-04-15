import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieNow from './MovieNow';
import './Home.scss';

const Home = () => {

const [moviesNow, setMoviesNow] = useState([]);


useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES`)
    .then(res => setMoviesNow(res.data.results))
    .catch(error => console.error(error))
},[moviesNow])

    return (
        <div>
            <h2 className="moviesNow">Peliculas en cines</h2>
            <div className='moviesNowList'>
                {moviesNow?.map(movie=><MovieNow movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home
