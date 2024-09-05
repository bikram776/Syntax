import React from 'react';
import HeroSection from './components/HeroSection';
import { useAllcontext } from './Context';
import { useEffect } from 'react';
import Services from './Services';
import Contact from './Contact';




const Home = () => {

  //const data = {
  //   name: "Syntax..",
  //   image: "./images/hero.svg"
  // };

  const { updateHomepage } = useAllcontext();

  useEffect(() =>  updateHomepage(), []);
    
  
  
  return ( 
  <>
  <HeroSection  />
  <Services />
  <Contact />
  </>
  )
};

export default Home;