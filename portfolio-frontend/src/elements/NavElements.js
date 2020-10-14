import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    display: grid;
    align-items: center;
    z-index: 200;
    background: var(--clr-white);
    grid-area: nav;

    @media screen and (min-width: 992px) {
        
    }
`;

/*Not in use*/
export const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    
  }
`;

export const NavHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    img {
        margin-bottom: 0.375rem;
    }
`;

export const NavLinks = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: row;

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

export const NavItems = styled.ul`   
    display: flex;
    list-style: none;
    align-items: flex-end;
    flex-direction: row;
`;

export const ToggleBtn = styled.button`
    font-size: 1rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        color: var(--clr-primary-2);
    }
`;
/*
.navbar { OK
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
}
.nav-center { OK
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-header { OK
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img { OK
  margin-bottom: 0.375rem;
}
.toggle-btn { OK
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover { OK
  color: var(--clr-primary-2);
}
.nav-links { OK
  
}
@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }
  .nav-links li {
    margin-right: 2rem;
  }
  .nav-links a {
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    background: transparent;
  }
} */
/*
===============
Sidebar
===============

.sidebar {
    background: var(--clr-grey-10);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .sidebar-links li {
    opacity: 0;
  }
  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .sidebar-links li a:hover {
    background: var(--clr-primary-9);
    color: var(--clr-primary-5);
  }
  .close-btn {
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
    .sidebar {
      transform: translateX(-100%);
    }
  }

*/

/*
===============
Sidebar Animation
===============

.sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  */