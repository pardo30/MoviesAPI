import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <NavLink to='/popular'>
                <div className="popular">Populares</div>
            </NavLink>
            <NavLink to='/latest'>
                <div className="latest">Estrenos</div>
            </NavLink>
            <NavLink to='/upcoming'>
                <div className="upcoming">Proximamente</div>
            </NavLink>
            <NavLink to='/top_rated'>
            <div className="top_rated">Más votadas</div> 
            </NavLink>
        </header>
        
    )
}

export default Header