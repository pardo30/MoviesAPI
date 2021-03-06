import React from 'react'
import './MovieTitle.scss'

const MovieTitle = (props) => {
    const movieTitleType = props.movieType;
    


    const getTitle = (movieTitleType) => {
        if(movieTitleType === 'popular'){
            return (<h3>Películas Populares</h3>)
        }
        if(movieTitleType === 'upcoming'){
            return (<h3>Próximas películas</h3>)
        }
        if(movieTitleType === 'now_playing'){
            return (<h3>Películas en cartelera</h3>)
        }
        if(movieTitleType === 'top_rated'){
            return (<h3>Películas más votadas</h3>)
        } else {
            return 
        }
    }

    return (
        <div >
            {getTitle(movieTitleType)}
        </div>
    )
}

export default MovieTitle
