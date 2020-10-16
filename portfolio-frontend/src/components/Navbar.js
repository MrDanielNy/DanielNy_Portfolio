import React from "react"
import logo from "../assets/logo_vr.svg"
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
      <NavCenter>
        <NavHeader>   
          <img src={logo} alt="logo" id="logo"/>
          <ToggleBtn onClick={toggleSidebar}>
            <FaAlignRight />
          </ToggleBtn>  
        </NavHeader>
        <PageLinks />
      </NavCenter>
    </Nav>
  )
}
export default Navbar
