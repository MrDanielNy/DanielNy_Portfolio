import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Nav, 
NavCenter,
NavHeader,
NavLinks,
ToggleBtn,
} from '../elements/NavElements'

const Navbar = ({toggleSidebar}) => {
  return (
    <Nav>
      {/*<nav className="navbar">
      <div className="nav-center">
  <div className="nav-header"> */}
      
      <NavCenter>
      <img src={logo} alt="logo" />
          <NavHeader>   
            <PageLinks />
            <ToggleBtn>
              <button type="button" className="toggle-btn" onClick={toggleSidebar}>
              <FaAlignRight></FaAlignRight>
              </button>
            </ToggleBtn>
           
          </NavHeader>
      </NavCenter>
          
    </Nav>
      
  )
}

export default Navbar
