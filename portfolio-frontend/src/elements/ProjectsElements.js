import styled from 'styled-components'
import theme from '../themes/theme'

export const ProjectsWrapper = styled.div`
display: grid;
width: 90vw;
grid-area: projectsection;
background: var(--clr-grey-10); /*var(--clr-grey-10); */


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

export const ProjectItem = styled.div`
  display: grid;
  margin-bottom: 4rem;
`; 
  
export const ProjectImage = styled.div`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  z-index: 1;

  &:hover &:after {
  opacity: 0;
  }

  @media screen and (min-width: 576px) {
    height: 19rem;
  }
  @media screen and (min-width: 768px) {
    height: 20rem;
  }
  @media screen and (min-width: 992px) {
    grid-column: 1 / span 8;
     /*grid-column-end: 8; */
    grid-row: 1 / 1;
    width: 60vw;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
`;

export const ProjectImageCover = styled.div`
 /* &:after {
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
  }*/
`;

export const ProjectInfo = styled.div`
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

export const ProjectNumber = styled.div`
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

export const AboutStack = styled.div`
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
`;

export const ProjectIcon = styled.div`
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-1);
  }
`;

/*
h2 { OK
  text-align: center;
  padding: 1rem;
}

.projects { OK
  background: var(--clr-grey-10);
}
.project { OK
  display: grid;
  margin-bottom: 4rem;
}
.project-img { OK
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  z-index: 1;
}*/
/*.project-img::after { NI
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
  opacity: 0.85;
  transition: var(--transition);
}*//*
.project:hover .project-img::after {
  opacity: 0;
}
.project-info { OK
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.project-number { OK
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
}
.project-info h3 { OK
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.project-desc { OK
  word-spacing: 15px;
  color: var(--clr-grey-3);
}
.project-stack { OK
  margin-bottom: 1rem;
}
.project-stack span,
.about-stack span {
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
.about-stack span {
  margin-top: 0.5rem;
}
.project-icon { OK
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);
}
.project-icon:hover { OK
  color: var(--clr-primary-1);
}
@media screen and (min-width: 576px) { OK
  .project-img {
    height: 19rem;
  }

  .project-info {
    opacity: 0.6;
  }
}
@media screen and (min-width: 768px) { OK
  .project-img {
    height: 22rem;
  }

  .project-info {
    opacity: 0.6;
  }
  
}
@media screen and (min-width: 992px) {
  .project {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    
  }
  .project-img {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; * /
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .project-info {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    opacity: 0.8;
    z-index: 1;
    grid-column: 8 / 12;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-img {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-info {
    grid-column: 2 / span 4;
    grid-row: 1 / 1;
    text-align: left;
  }
}
`; */