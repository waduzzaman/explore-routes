import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <nav>
                <NavLink className={({isActive})=>isActive?'activeLink':undefined}  to={'/products'}>Products</NavLink>
                <NavLink to={'/friends'}>Friends</NavLink>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/post'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            
            </nav>            
            <p>Common Header</p>
        </div>
    );
};

export default Header;