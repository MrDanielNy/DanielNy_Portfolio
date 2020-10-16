import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { SidebarWrapper } from '../elements/NavElements'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <button onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <Links usingSidebar={isOpen} />
        <SocialLinks linksStyle="sidebar"/>
      </div>
    </SidebarWrapper>
  )
}
export default Sidebar
