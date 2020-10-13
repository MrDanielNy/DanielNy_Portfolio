import React from "react"
import  SocialLinks from "../constants/socialLinks"
import { FooterWrapper, FooterLinks, SocialLink } from '../elements/FooterElements'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <p>Copyright&copy; {new Date().getFullYear} Daniel Ny</p>
        <SocialLinks />
      </FooterLinks>
    </FooterWrapper>
  )
}

export default Footer
