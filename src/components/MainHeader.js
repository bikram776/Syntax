import styled from "styled-components";

export const MainHeader = styled.header`
padding: 0 1.8rem;
width: 100%;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 1;

.logo{
  margin-top: 28px;
  width: 150px;
  height: 100px;
  object-fit: cover;
   
}
`;