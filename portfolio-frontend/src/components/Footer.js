import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return ( 
  <footer className="footer">
    <p>Copyright&copy; {new Date().getFullYear} Daniel Ny</p>
    <SocialLinks className="footer-links" />
  </footer>
  )
}

export default Footer
