import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';
import MovieTitle from '../../components/MovieTitle';
import Pages from '../../components/Pages';
import './Movies.scss';

const Movies = props => {
    const movieType = props.match.params.movieType;
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const selectedPage = page

    const back = () => {
        if(selectedPage > 1) {setPage( page - 1)}
    }

    const forward = () => {
        setPage(page +1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=6db8b1cae4de7ed79b6af06f87c63d15&&language=es-ES&include_image_language=es-ES,null&page=${selectedPage}`)
        .then(res=> setMovies(res.data.results))
        .catch(error => console.error(error))
    }, [movieType,selectedPage]);

    return (
        <div>
            <div>
                <MovieTitle movieType={movieType} />
            </div>
            <div className='movies'>
                {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}
            </div>
            <Pages 
                page={selectedPage} 
                back={back}
                forward={forward}
            />
                
            {/* <div className='pagesBar'>
                <button onClick={()=>setPage(page - 1)}>atrás</button>
                <div>{selectedPage} / 500 </div>
                <button onClick={()=>setPage(page + 1)}>delante</button>
            </div> */}
        </div>
    )
}

export default Movies
