import styled from "styled-components";

export const Wrapper = styled.section`
padding: 9rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 40px;
}
.btn {
  max-width: 16rem;
  margin-left: 20%;
}
.hero-top-data {
  text-transform: uppercase;
  padding-left: 20%;
  padding-top: 40px;
  font-weight: 500;
  font-size: 1.5rem;
  
  color: ${({ theme }) => theme.colors.helper};
}
.hero-heading {
  text-transform: uppercase;
  font-size: 4.4rem;
  padding-left: 19.9%;
  word-spacing: 0;
  
}
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
  padding-left: 20%;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
picture {
  text-align: center;
}
.hero-img {
  max-width: 50%;
  margin-top: 70px;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}

`;