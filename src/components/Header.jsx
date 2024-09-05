import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { MainHeader } from './MainHeader';


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
         <img /*className="Img_1"*/  src="src/images/logo2.png" alt="logo" className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
};  



export default Header;