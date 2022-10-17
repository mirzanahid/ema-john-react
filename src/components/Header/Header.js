import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  
    return (
        <header className='header'>
           <nav className='nav'>
            <Link to={'/'}><img src={logo} alt="" /></Link>
            <ul className='navItems'> 
                <li><NavLink to="/" >Shop</NavLink></li>
                <li><NavLink to="orders">Order</NavLink></li>
                <li><NavLink to="review">Order Review</NavLink></li>
                <li><NavLink to="inventory">Manage Inventory</NavLink></li>
                <li><NavLink to="login">Login</NavLink></li>
            </ul>
           </nav>
        </header>
    );
};

export default Header;