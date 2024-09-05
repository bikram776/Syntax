import styled from "styled-components";

export const Boyce = styled.section`
padding: 1rem 0 1rem 0;
.container{
  margin-top: 4rem;
  text-align: center;

  .contact-form{
    max-width: 30rem;
    margin: auto;

    
  }
}


input, textarea{
  max-width: 50rem;
  color: ${({theme}) => theme.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  text-transform: uppercase;
  box-shadow: ${({theme}) => theme.colors.shadowSupport};
}

input[type="submit"] {
  max-width: 8rem;
  margin-top: 1rem;
  background-color: ${({theme}) => theme.colors.btn};
  color: ${({theme}) => theme.colors.white};
  padding: 1.3rem 2.2rem;
  border-style: solid;
  border-radius: 50% 20% / 10% 40%;
  border-width: .1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
}

.contact-inputs{
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type="submit"]{
    cursor: pointer;
    transition: all 0.2s;
    

    &:hover {
      background-color: ${({theme}) => theme.colors.white};
      border: ${({theme}) => theme.colors.btn};
      color: ${({theme}) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
}
.common-heading{
  margin-top: 60px;
}

`;