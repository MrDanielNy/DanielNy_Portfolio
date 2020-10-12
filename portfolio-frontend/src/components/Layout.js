import React from "react"
//import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { LayoutWrapper } from '../elements/LayoutElements'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    console.log("***Click!***")
  }

  return (
    <LayoutWrapper>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer/>
    </LayoutWrapper>
  )
}

export default Layout
