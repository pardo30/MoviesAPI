import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'

const Search = () => {
    const [searchData, setSearchData] = useState('')
    const [movies, setMovies] = useState([])
    
    const handleChangeInput = e => {
        const base = e.target;
        e.preventDefault();
        setSearchData(base.value)
    }

    const SearchMovie = () => {
        const result = String(searchData);
        console.log(result)
        return result
    }

    useEffect(result => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&query=${result}&language=es-ES`)
        .then(res=> setMovies(res.data.results))
        .catch(error => console.error(error))
        }, [])
    
 
    return (
        <div>
            {searchData}
           <div className="search">
               <form action="">
                   <input 
                   type='text'
                   autoFocus
                   placeholder='Busca una pelicula'
                   onChange={handleChangeInput}
                   value={searchData}/>
                   <button onClick={SearchMovie}>Buscar</button>
               </form>
           </div>
           <div className="result">
                   <p>Hola</p>
            
            {movies?.map(movie=><Movie movie={movie} key={movie.id}/>)}   
            </div> 
        </div>
    )
}

export default Search
