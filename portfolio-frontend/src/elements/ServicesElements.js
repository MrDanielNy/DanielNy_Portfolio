import styled from 'styled-components'

export const ServicesWrapper = styled.div`
grid-area: services;
align-items: center;

h2 {
    color: black;
    text-align: center;
}

h4 {
    color: black;
}
`;

export const Service = styled.div`
  background: var(--clr-grey-8);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  max-width: 75%;

  p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
  }

  &:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
  &:hover p {
  color: var(--clr-primary-9);
}
`;

export const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ServiceCenter = styled.div`
  @media screen and (min-width: 676px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
}

@media screen and (min-width: 992px) {
  grid-template-columns: 1fr 1fr 1fr;
}
`;


/*
.service {
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service .underline {
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
.service:hover p {
  color: var(--clr-primary-9);
}
.service:hover .underline {
  background: var(--clr-primary-9);
}
@media screen and (min-width: 676px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`; */