import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Search.scss';

const Search = () => {
    const [searchData, setSearchData] = useState('')
    const [movies, setMovies] = useState([])
    
    const handleChangeInput = e => {
        const base = e.target;
        e.preventDefault();
        setSearchData(base.value)
    }
    
    const SearchMovie = e => {
        e.stopPropagation();
        console.log('solicitando')
        e.currentTarget.reset();
        }

    useEffect( (query = searchData) => {
        const respose = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${searchData}`)
            .then(res=> setMovies(res.data.results))
            .catch(error => console.error(error))
        };
        respose()
        }, []);

    return (
        <div>
           <div className="search" onSubmit={handleSubmit}>
               <form action="">
                   <input 
                   type='search'
                   autoFocus
                   placeholder='Busca una pelicula'
                   onChange={onSearchChange}
                   value={searchData}/>
                   <button type='submit'>Buscar</button>
               </form>
           </div>
           <div>Esta es la busqueda: {searchData}</div>

           <div className="result">
               {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}   
           </div>
        </div>
    )
}

export default Search
