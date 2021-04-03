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
                    <div className='upcoming'>Próximamente</div>
                </NavLink>
                <NavLink to='/top_rated'>
                <div className='top_rated'>Más votadas</div> 
                </NavLink>
                <NavLink to='/search/movie'>
                <div className='search'>Búsqueda</div> 
                </NavLink>
            </div>
        </header>

        
    )
}

export default Header
