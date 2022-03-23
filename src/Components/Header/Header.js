import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
           <nav className='header'>
               <img src={Logo} alt="" />
               <div className="">
                   <a href="">Shop</a>
                   <a href="">Orders</a>
                   <a href="">Ivontory</a>
                   <a href="">About</a>
               </div>

           </nav>
    );
};

export default Header;