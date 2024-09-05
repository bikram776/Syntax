import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

html{
    font-size: 75.5%;
    /* scroll-behaviour: smooth;*/
    /* 1rem = 10px */
    overflow-x: hidden;
}

::-webkit-scrollbar{
   width: 8px;
   
}
::-webkit-scrollbar-track{
   background-color: #E6E6FA;
}
::-webkit-scrollbar-thumb{
   background-color: #254038;
   border:1px solid transparent;
   border-radius: 4px;
   background-clip: content-box;
}


h1{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 3.8rem;
    font-weight: 800;
    
}
h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    white-space: normal;
    font-weight: 300;
    text-align: center;
  }
 h3{
    font-size: 1.8rem;
    font-weight: 400rem;
 }
 p{
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 1rem;
 }

 a{
    text-decoration: none;
 }
 li{
    list-style: none;
 }

 .container{
    max-width: 120rem;
    margin-top: -80px;
 }
 
 .grid{
    display: grid;
    gap: 3rem;
 } 
 
 .grid-two-column{
    grid-template-columns: repeat(2, 1fr);
 }
 .grid-three-column{
    grid-template-columns: repeat(3, 1fr);
 }
 .grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
 }

`;