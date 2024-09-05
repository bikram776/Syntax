import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { Wrapper } from '../Wrapper';
import { AppContext } from '../Context';
import { useAllcontext } from '../Context';


const HeroSection = () => {
    const {name, image} = useAllcontext();
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">This is us.</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">Hi welcome to {name} this is an experiment and it is going quite well.
                The spread operator ... is used to expand or spread an iterable or an array.
                </p>
                <Button className="btn hireme-btn">
                <NavLink to="/contact">Hire me</NavLink>
            </Button>
            </div>
            
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="" className="hero-img" />
                </picture>
            </div>
        </div>
    </Wrapper>

  ); 
};    


export default HeroSection; 