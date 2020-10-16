import styled from 'styled-components'

export const ContactWrapper = styled.section`
    background: var(--clr-grey10);
    min-height: calc(100vh - 5rem - 9rem);
    display: grid;
    place-items: center;
    padding: 5rem 0;

    h3 {
  padding-top: 1.25rem;
  color: var(--clr-grey-5);
}
`; 

export const ContactFormWraper = styled.article`
display: grid;
  place-items: center;
  padding: 5rem 0;
`;

export const ContactForm = styled.div`
background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;

  

padding: 1rem 1.5rem;
`;

export const ContactInput = styled.input`

`;

export const ContactTextArea = styled.input`

`;

export const SubmitButton = styled.button`
    display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;