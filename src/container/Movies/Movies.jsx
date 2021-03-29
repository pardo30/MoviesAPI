import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';
import './Movies.scss';

const Movies = props => {
    const movieType = props.match.params.movieType;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES`)
        .then(res=> setMovies(res.data.results))
        .catch(error => console.error(error))
    }, [movieType])
    return (
        <div>
            <h4>
                {movieType}
            </h4>
            <div className='movies'>
                {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}
            </div>
            
        </div>
    )
}

export default Movies
