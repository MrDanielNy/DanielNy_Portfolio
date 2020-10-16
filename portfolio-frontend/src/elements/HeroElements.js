import styled from 'styled-components'
//import theme from '../themes/theme'

export const HeroWrapper = styled.section`
  display: flex;
  width: 100%;
  grid-area: herowrapper;
`;

export const HeroCenter = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  align-items: center;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const HeroInfo = styled.div`
  //background-color: var(--clr-grey-1);
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  
  @media screen and (min-width: 992px) {
    width: 95vw;
  
  flex-direction: column;
  min-height: 100%;
  width: 49%;
  grid-area: heroimage;
  text-align: center;

  h1 {
    margin-top: 4rem;
    font-size: 3rem;
    color: black;
  }

  h4 {
    font-size: 1.5rem;
    color: black;
  }
}
`;

export const HeroImage = styled.div`
  background-color: var(--clr-grey-2);
  display: none;

  @media screen and (min-width: 992px) {
  display: grid;
  min-height: 100vh;
  width: 49%;
  grid-area: heroinfo;
  }
`;