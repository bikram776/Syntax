import styled from "styled-components"; 


export const Wrapepr = styled.section`
  padding: 0rem 1rem 0rem 0rem;
  background-color: ${({ theme }) => theme.colors.bg};

  .container{
    max-width: 80rem;
    padding: auto;
    margin: auto;
  }

  .common-heading{
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 110px;
    margin-bottom: 5rem;
    text-transform: capitalize;
  }

  .card{
    .card-data{
        padding: 0.2rem; 
        
    }

  }

  figure{
    width: 79%;
    display: felx;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s linear;
    &::after{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
    }
    &:hover::after {
        width: 100%;
    }
    &:hover img{
        transform: scale(1.8);
    }
    img{
        max-width: 100%;
        margin-top: 1.5rem;
        height: 15rem;
        transition: all 0.2s linear;
    }
  }


`;