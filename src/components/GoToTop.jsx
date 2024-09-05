import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
    const goTobtn = () =>{
        window.scrollTo({top:0, left:0, behavior: 'smooth'});
    };

    const listentoscroll = () =>{



      let heightToHidden = 300;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      
      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else{
        setIsVisible(false);
      }
    };
    useEffect(() => {
     window.addEventListener("scroll" , listentoscroll);
    }, []);


  return (
    <Gotostyle>
      {isVisible && (
    <div className="Up-btn" onClick={goTobtn}>
        <FaArrowUp className="Up-btn--icons"/>
    </div>  
    )}
    </Gotostyle>
  );
};

const Gotostyle = styled.section`
display: flex;
justify-content: center;
align-items: center;
position: relative;
.Up-btn {
  font-size: 1.2rem;
  width: 2.8rem;
  height: 2.8rem;
  color: #FCF4DC;
  background-color: #806AEC;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 50%;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &--icons {
    animation: gototop .8s linear infinite alternate-reverse;
  }
  @keyframes gototop {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .top-btn {
    right: 0;
    left: 40%;
  }
}
`;

export default GoToTop; 