import styled from 'styled-components'
import theme from '../themes/theme'

export const HeroWrapper = styled.div`
  display: grid;

`;

export const HeroInfoWrapper = styled.div`
  background-color: var(--clr-grey-1);
  display: grid;
  grid-area: heroinfo;
`;

export const HeroImageWrapper = styled.div`
  background-color: var(--clr-grey-2);
  display: grid;
  grid-area: heroimage;
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