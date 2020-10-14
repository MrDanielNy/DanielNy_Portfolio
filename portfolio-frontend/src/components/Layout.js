import React from "react"
//import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { LayoutWrapper } from '../elements/LayoutElements'
import Hero from './Hero'
import Services from './Services'
import Jobs from './Jobs'
import Projects from './Projects'

import GlobalStyles from '../elements/Global'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <LayoutWrapper>
      <GlobalStyles/>
      <Navbar toggleSidebar={toggleSidebar}/>
      {/*<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />*/}
      {children}
      <Footer/>
    </LayoutWrapper>
  )
}

export default Layout