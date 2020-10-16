import styled from 'styled-components'
import Image from 'gatsby-image'

export const ProjectsWrapper = styled.section` //OK
  padding: 5rem 0;
  margin-top: 3rem;
  grid-area: projectsection;
  background: var(--clr-grey-10); /*var(--clr-grey-10); */

  &:hover div::after {
    opacity: 0;
  }

  h2 {
    text-align: center;
    padding: 1rem;
    color: black;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
}
`;

export const ProjectsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const ProjectItem = styled.article`
  display: grid;
  margin-bottom: 4rem;
  
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    &:nth-of-type(even) div {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
      }
        //Position even projectInfos
      &:nth-of-type(even) section {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
      }

      &:nth-of-type(odd) div {
        grid-column: 1 / 8;
        grid-row: 1 / 1;
      }
        //Position odd projectInfos
      &:nth-of-type(odd) section {
        grid-column: 5 / span 7;
        grid-row: 1 / 1;
        text-align: left;
      }
  }
  
`; 
  
export const ProjectImage = styled(Image)`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  
  &:after {
    display: inline-block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }

  @media screen and (min-width: 576px) {
    height: 19rem;
  }
  @media screen and (min-width: 768px) {
    height: 20rem;
  }
  @media screen and (min-width: 992px) {
    grid-column: 1 / span 8;
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
`;

export const ProjectInfo = styled.section`
  //display: inline-grid;
  width: 100%;
  
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

@media screen and (min-width: 576px) {
    opacity: 0.6;
}
@media screen and (min-width: 768px) {
    opacity: 0.6;
}
`;

export const ProjectName = styled.span`
  margin-left: 1rem;
  width: 100%;
  font-weight: 500;
  line-height: 1.7rem; 
  font-size: 1.5rem;
  color: black;
`;

export const ProjectNumber = styled.span`
  font-size: 1.25rem;
  color: var(--clr-primary-5);
`;

export const ProjectInfoHeading = styled.div`
  display: flex;
`;

export const ProjectLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
`;

export const ProjectStack = styled.div`
  grid-column: 1 / 4;
    grid-row: 3 / 3;
  span { /* Controlls the tags */
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
}
`;

export const ButtonCenter = styled.div`
  width: 100%;
  text-align: center;

`;

export const ProjectIcon = styled.div`
  grid-area: projectlinks;
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-1);
  }
`;