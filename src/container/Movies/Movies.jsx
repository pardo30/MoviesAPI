import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';

const Movies = props => {
    const movieType = props.match.params.movieType;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=6db8b1cae4de7ed79b6af06f87c63d15`)
        .then(res=> setMovies(res.data.results))
        .catch(error => console.error(error))
    }, [])
    return (
        <div className='Movies'>
            Tipo de peliculas: {movieType}
            {movies?.map(movie=><Movie movie={movie}/>)}
        </div>
    )
}

export default Movies
