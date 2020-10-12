import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper, FooterLinks } from '../elements/FooterElements'

const Footer = () => {
  return (
    <FooterWrapper>
    <footer>
        <p>Copyright&copy; {new Date().getFullYear} Daniel Ny</p>
        
          <SocialLinks>
            <FooterLinks />
          </SocialLinks>
        
         
       {/*className="footer-links" />*/}
    </footer>
    </FooterWrapper>
  )
}

export default Footer
