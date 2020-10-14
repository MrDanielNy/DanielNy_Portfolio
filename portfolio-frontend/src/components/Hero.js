import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { HeroInfoWrapper, HeroImageWrapper, HeroWrapper } from '../elements/HeroElements'

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
    <HeroWrapper>
      {/* Removed <header> and <article>*/}
            <HeroInfoWrapper>
              <h1>Daniel Ny</h1>
              {/*<div className="underline"></div>*/}
              <h4>Indie developer going pro</h4>
              <br />
              <Link to="/contact" className="btn">
                Get in touch
              </Link>
              <SocialLinks />
            </HeroInfoWrapper>
          {/*removed </article>*/}
          <HeroImageWrapper>
            <Image fluid={fluid} />
          </HeroImageWrapper>
          
      {/*removed </header>*/}
    </HeroWrapper>
  )
}
export default Hero
