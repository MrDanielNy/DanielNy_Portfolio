import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from '../elements/FooterElements'

const Footer = () => {
  return (
    <FooterWrapper>
    <footer className="footer">
        <p>Copyright&copy; {new Date().getFullYear} Daniel Ny</p>
        <SocialLinks className="footer-links" />
    </footer>
    </FooterWrapper>
  )
}

export default Footer
