import styled from "styled-components"; 
export const Footerstyle = styled.section`
.contact-short{
  max-width: 60vw;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 2rem 5rem;
  padding-top: 30px; 
  background-color: ${({theme}) => theme.colors.bg};
  border-radius: 20px;
  box-shadow: ${({theme}) => theme.colors.shadowSupport};
  transform: translateY(70%);

  .grid div:last-child{
    justify-self: end;
    align-self: center;
  }

  .btn{
    width: auto;
    font-size: 15px;
  }
}

footer{
  
    padding: 8rem 0rem 0rem 0rem;
    background-color: ${({theme}) => theme.colors.footer_bg};   
}
h3{
    color: #fff;
    margin-bottom: 2rem;
    margin-left: 20px;
}
p{
    color: #fff;
    margin-left: 20px; 

}
input, textarea{
    max-width: 40rem;
    color: ${({theme}) => theme.colors.black};
    padding: 0.5rem 1.2rem;
    border: 1px solid ${({theme}) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({theme}) => theme.colors.shadowSupport};
  }
  
  input[type="submit"] {
    max-width: 6rem;
    margin-top: 1rem;
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.colors.btn};
    color: ${({theme}) => theme.colors.white};
    padding: 0.2rem 4.2rem;
    padding-left: 4px;
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-radius: 50% 20% / 10% 40%;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
  }
  .social-icons{
    display: flex;
    gap: 10px;
    

    div{
        padding: 2px;
        border-radius: 40%;
        border: 2px solid #fff;

        .icons{
            color: #fff;
            font-size: 30px;
            width: 50px;
            margin-top: 8px;
            cursor: pointer;
        }
    }
  }

  .footer-cont{
    color: #fff;
  }
.contaiiner{
    max-width: 100%;
    margin-top: 2px;
    margin-bottom: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
}

  .griid{
   
    display: grid;
    
  }
  .griid-two-column{
    grid-template-columns: repeat(2, 1fr);
 }
`;


//
