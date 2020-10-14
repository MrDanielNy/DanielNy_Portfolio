import styled from 'styled-components'
import theme from '../themes/theme'

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  
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
  }

  h4 {
    font-size: 1.5rem;
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
/*
export const HeroWrapper = styled.div`
  background-color: var(--clr-grey-1);
  min-height: 100vh;
  background: var(--dark-shadow);

.hero-center {
  height: 100%;
  display: grid;
  align-items: center;
}

.hero .underline {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.hero-info {
  background: var(--dark-shadow);
  margin-top: -5rem;
}
.hero-img {
  display: none;
}
.hero-info h4 {
  color: var(--clr-grey-5);
}
.hero-icons {
  justify-items: flex-start;
}
.hero .btn {
  margin-top: 1.25rem;
}

@media screen and (min-width: 992px) {
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 65%;
    right: 0;
    bottom: 0;
    background: var(--dark-shadow);
  }
  .hero-center {
    grid-template-columns: repeat(12, 1fr);
  }

  .hero h4 {
    font-size: 0.85rem;
  }
  .hero-info {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 6/-1;
  }
}

@media screen and (min-width: 1170px) {

  .hero {
  margin-top: -5rem;
  padding-top: 5rem;
  min-height: 100vh;
  background: var(--dark-shadow);
  position: relative;
}

  .hero h4 {
    font-size: 1rem;
  }

  .hero-info {
    grid-column: 1 / span 8;
  }

  .hero h4 {
    line-height: 1;
  }
}

`; */