import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import SearchIcon from '@material-ui/icons/Search';
import './Search.scss';

const Search = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    
    // const press = (e) =>{
    //     if (e.keyCode === 13 && !e.shiftKey) {
    //         setSearch(query);
    //     }}
    const handleSubmit = e => {
        if (query !== '') {
            setSearch(query)
            setQuery('')
        }
        e.preventDefault();
    }


    useEffect( () => {
        const respose = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${search}`)
            .then(res=> setMovies(res.data.results))
            .catch(error => console.error(error))
        };
        respose();
        }, [search]);

    return (
        <div className='search-box'>
           <form className="searchBar" onSubmit={handleSubmit} >
                <input 
                   type='text'
                   autoFocus
                   placeholder='Busca una pelicula'
                   onChange={e => setQuery(e.target.value)}
                    />
                <button
                    id='button' 
                    type='submit'>
                       <SearchIcon />
                </button>
           </form>
           <div className="result">
               {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}   
           </div>
        </div>
    )
}

export default Search
