import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { HeroWrapper } from '../elements/HeroElements'

const query = graphql`
    {
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  
  return (
    <>
      <header>
        <div>
          <article className="hero-info">
            <div>
              <h1>Daniel Ny</h1>
              <div className="underline"></div>
              <h4>Indie developer going pro</h4>
              <br />
              <Link to="/contact" className="btn">
                Get in touch
              </Link>
              <SocialLinks />
            </div>
          </article>
          <Image fluid={fluid} className="hero-img" />
         </div>
      </header>
    </>
  )
}
export default Hero
