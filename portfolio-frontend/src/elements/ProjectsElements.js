import styled from 'styled-components'
import Image from 'gatsby-image'

export const ProjectsWrapper = styled.section` //OK
  //width: 100vw;
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
  }
  //Position the even images
  
`; 
  
export const ProjectImage = styled(Image)`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  z-index: 1;
  
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
  display: grid;
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  h3 {
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

@media screen and (min-width: 576px) {
    opacity: 0.6;
}
@media screen and (min-width: 768px) {
    opacity: 0.6;
}
`;

export const ProjectNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
`;

export const ProjectLinks = styled.div`

`;

export const ProjectDesc = styled.div`
  word-spacing: 15px;
  color: var(--clr-grey-3);
`;

export const ProjectStack = styled.div`
  margin-bottom: 1rem;

  span { /* Controlls the tags */
    display: inline-block;
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

/*export const AboutStack = styled.div`
  span {
    margin-top: 0.5rem;
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`;*/

export const ProjectIcon = styled.div`
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-1);
  }
`;