import React from 'react'

const Movies = props => {
    return (
        <div className='Movies'>
            Tipo de peliculas: {props.match.params.movieType}
        </div>
    )
}

export default Movies
