import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  bottom: 0px;
  height: 9rem;
  background: #222;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
  grid-area: footer;

  p {
    color: var(--clr-white);
  }


h4 {
  margin-top: 0.5rem;
  color: var(--clr-white);
  font-weight: normal;
  text-transform: uppercase;
}

h4 span {
  color: var(--clr-primary-5);
}

`;

export const SocialLinks = styled.div`
  color: var(--clr-white);
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;

    li {
      &:hover {
      color: var(--clr-primary-5);
    }
    }
  }

  
`;

export const SocialLink = styled.div`
  display: flex;
  font-size: 2.75rem;
  color: var(--clr-grey-1);
  transition: var(--transition);
  flex-wrap: wrap;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto 1rem auto;

    &:hover {
      color: var(--clr-primary-5);
    } 
  }

  
`;

export const FooterLinks = styled.div`
  /*margin: 0 auto 0.5rem auto;
  flex-direction: column;
  list-style: none;*/
`; 