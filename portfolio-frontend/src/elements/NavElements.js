import styled, { keyframes, css } from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
  grid-area: nav;

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`;

/*Not in use*/
export const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

#logo{ 
  height: 50px;
  width: auto;
}

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    
  }
`;

export const NavHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const NavLinks = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
        

        li {
            margin-right: 2rem;
        }

        a {
            text-transform: capitalize;
            color: var(--clr-grey-1);
            font-weight: bold;
            letter-spacing: var(--spacing);
            transition: var(--transition);
            padding: 0.5rem 0;
            text-decoration: none;
            font-size: 1.5rem;
        }

        a:hover {
            color: var(--clr-primary-5);
            box-shadow: 0px 2px var(--clr-primary-5);
        }
    }   
`;

/* Animations */

//Sets transform outside of window and opacity to 0. Then transform to zero and opacity to one
const fadeIn = keyframes`
    0% {
            transform: translateX(-200px);
            opacity: 0;
        }
    100% {
            transform: translateX(0);
            opacity: 1;
        }
`;

//Slide elements to the right and fade in as shown above
//(I got this solution from Mikael Sundqvist).
const slideRight = css`
    animation: ${fadeIn} 0.3s ease-in-out 0.3s forwards; 
`;

/* Sidebar */
export const SidebarWrapper = styled.aside`
  background: var(--clr-grey-10);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity:  ${({ isOpen }) => isOpen ? "1" : "0"};
  transition: var(--transition);
  transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-100%)"};

  button {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`;

export const SidebarLinks = styled.ul` 
    li {
        opacity: 0;
    }

    li a {
      display: block;
      text-align: center;
      text-transform: capitalize;
      color: var(--clr-grey-5);
      letter-spacing: var(--spacing);
      margin-bottom: 0.5rem;
      font-size: 3rem;
      transition: var(--transition);
      border-radius: var(--radius);
      color: black;
    }
    
    li {
      ${slideRight};
    }
    
    //animated list items
    li:nth-of-type(1) {
        animation-delay: 0.25s;
    }

    li:nth-of-type(2) {
        animation-delay: 0.5s;
    }

    li:nth-of-type(3) {
        animation-delay: 0.75s;
    }

    li:nth-of-type(4) {
        animation-delay: 1s;
    }

    li:nth-of-type(5) {
        animation-delay: 1.25s;
    }
`;

export const ToggleBtn = styled.button`
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        color: var(--clr-primary-2);
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
`;