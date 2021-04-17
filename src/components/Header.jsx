import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Title from './Title';
import './Header.scss';

const Header = () => {
    return (
        <header>
            {/* <NavLink to='/'> <Title /> </NavLink> */}
            <div className='type'>
                <NavLink to='/'> 
                    <div className='Index'>Inicio</div>
                </NavLink>
                <NavLink to='/popular'>
                    <div className='popular'>Populares</div>
                </NavLink>
                <NavLink to='/upcoming'>
                    <div className='upcoming'>Proximamente</div>
                </NavLink>
                <NavLink to='/top_rated'>
                <div className='top_rated'>Mas votadas</div> 
                </NavLink>
                <NavLink to='/now_playing'>
                <div className='now_playing'>En cartelera</div> 
                </NavLink>
                <NavLink to='/search/movie'>
                <div className='search'><SearchIcon /> Buscar</div> 
                </NavLink>
            </div>
        </header>

        
    )
}

export default Header
