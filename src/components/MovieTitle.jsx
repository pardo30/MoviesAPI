import React from 'react'

const MovieTitle = (props) => {
    const movieTitleType = props.movieType;
    


    const getTitle = (movieTitleType) => {
        if(movieTitleType === 'popular'){
            console.log(20)
            return (<h4>Películas Populares</h4>)
        }
        if(movieTitleType === 'upcoming'){
            return (<h4>Próximas películas</h4>)
        }
        if(movieTitleType === 'top_rated'){
            return (<h4>Pelíulas más votadas</h4>)
        } else {
            return (<h4>Otros</h4>)
        }
    }

    return (
        <div>
            {movieTitleType}
            {getTitle}
            hello
        </div>
    )
}

export default MovieTitle
