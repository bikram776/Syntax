import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {CgMenu, CgCloseR} from 'react-icons/cg';

const Navbar = () => {
    
  return (
   <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
            <li className="navbar-link">
                <NavLink to="/" ><strong>Home</strong> </NavLink>
            </li>
            <li className="navbar-link">
                <NavLink to="/about" ><strong> About</strong></NavLink>
            </li>
            <li className="navbar-link">
                <NavLink to="/services" > <strong>Services</strong></NavLink>
            </li>
            <li className="navbar-link">
                <NavLink to="/contact" ><strong>Contact</strong></NavLink>
            </li>
        </ul>
        
      </div>

  </Nav>
  );

};
const Nav = styled.nav`
.navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
      }
      
    }
      
  }
}


    `;

export default Navbar;