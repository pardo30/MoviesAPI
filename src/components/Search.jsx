import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Search.scss';

const Search = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    
    const press = (e) =>{
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
        }}

    useEffect( () => {
        const respose = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${search}`)
            .then(res=> setMovies(res.data.results))
            .catch(error => console.error(error))
        };
        respose();
        }, [search]);

    return (
        <div>
           <div className="search" >
                <input 
                   type='search'
                   autoFocus
                   placeholder='Busca una pelicula'
                   onChange={e => setQuery(e.target.value)}
                   onKeyPress={press}
                   value={query}
                    />
                   <button id='button' type='button' onClick={() => setSearch(query)}>Buscar</button>
           </div>
           <div className="result">
               {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}   
           </div>
        </div>
    )
}

export default Search
