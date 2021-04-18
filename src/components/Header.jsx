import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { grey } from '@material-ui/core/colors';

//import Title from './Title';
import './Header.scss';

const Header = () => {
    
    const mediaMatch = window.screen.width;
    const [open, setOpen] = useState(false)

    const openMenu = e => {
        e.preventDefault();
        open
            ? setOpen(false)
            : setOpen (true)
        
    }
    if(mediaMatch > 450) {
    return (
        <header>
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
    )} else {
        return (
            <div className='dropMenu'>
                <div onClick={openMenu} className='dropButton'><DehazeIcon style={{ color: grey[50] }} /> </div>
                {open
                    ? (<div className='dropdown'>
                        <NavLink to='/'> 
                            <div className='Index'>Inicio</div>
                        </NavLink>
                        <NavLink to='/popular'>
                            <div className='popular'>Populares</div>
                        </NavLink>
                        <NavLink to='/upcoming'>
                            <div className='upcoming'>Próximamente</div>
                        </NavLink>
                        <NavLink to='/top_rated'>
                        <div className='top_rated'>Más votadas</div> 
                        </NavLink>
                        <NavLink to='/now_playing'>
                        <div className='now_playing'>En cartelera</div> 
                        </NavLink>
                        <NavLink to='/search/movie'>
                        <div className='search'>Buscar</div> 
                        </NavLink>
                    </div>)
                    : null}
            </div>
        )
    }
}

export default Header
