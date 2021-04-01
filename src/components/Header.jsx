import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className='type'>
                <NavLink to='/popular'>
                    <div className='popular'>Populares</div>
                </NavLink>
                <NavLink to='/upcoming'>
                    <div className='upcoming'>Proximamente</div>
                </NavLink>
                <NavLink to='/top_rated'>
                <div className='top_rated'>Más votadas</div> 
                </NavLink>
                <NavLink to='/search/movies/'>
                <div className='search'>Busqueda</div> 
                </NavLink>
            </div>
            <div>
                Search
            </div>
        </header>

        
    )
}

export default Header
