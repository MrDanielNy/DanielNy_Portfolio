import styled from 'styled-components'

export const JobsWrapper = styled.div`
grid-area: jobsection;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2 {
    color: black;
    text-align: center;
}
`;

export const JobsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem; 
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const JobBtn = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  &:hover {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
  }

  .active-btn {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
  }
`;

export const JobInfo = styled.div`
  h3 {
  font-weight: 400;
}

h4 {
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
}
`;

export const JobDate = styled.div`
  letter-spacing: var(--spacing);
`;
/*.jobs-center { OK
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.btn-container { OK
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
}
.job-btn { OK
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
}
.job-btn:hover { OK
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}
.active-btn {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}
.job-info {
  /* min-height: 420px; 
}*/
/*.job-info h3 {
  font-weight: 400;
}
.job-info h4 {
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
}
.job-date {
  letter-spacing: var(--spacing);
}
.job-desc {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
}
.job-desc p {
  margin-bottom: 0;
  color: var(--clr-grey-3);
}
.job-icon {
  color: var(--clr-primary-5);
}
@media screen and (min-width: 992px) {
  .jobs-center {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
  .btn-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .job-btn {
    margin-bottom: 1rem;
  }
  .active-btn {
    box-shadow: -2px 0 var(--clr-primary-5);
  }
  .job-btn:hover {
    box-shadow: -2px 0 var(--clr-primary-5);
  }
}
`; */