import React from 'react';
import HeroSection from './components/HeroSection';
import { useAllcontext } from './Context';
import { useEffect } from 'react';

const About = () => {
  // const data = {
  //   name: "Syntax History",
  //   image: "./images/about1.svg"
  // };

  const {updateAboutpage} = useAllcontext();

  useEffect(() => updateAboutpage(), []);
  
 
  return <HeroSection />
};

export default About;