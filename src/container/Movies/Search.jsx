import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';
import SearchIcon from '@material-ui/icons/Search';
import background from '../../img/background_cinema.jpg';
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
            <h3 className="searchTitle">Busca una pelicula dentro la enorme base de datos de TMDB</h3>
           <form className="searchBar" onSubmit={handleSubmit} >
                <input 
                   type='search'
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
           <div className='background' style={{ backgroundImage: `url(${background})` }} ></div>
        </div>
    )
}

export default Search
