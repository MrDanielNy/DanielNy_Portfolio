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

  // console.log(data)

  return (
    <HeroWrapper>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <h1>Daniel Ny</h1>
              <div className="underline"></div>
              <h4>Indie developer going pro</h4>
              - 🔭 I’m currently working on my own Portfolio site
              <br />
              - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi among other things!
              <br />
              - 🤔 14 years experience of Customer Service
              <br />
              - 💬 Cooperation is the key of success on any project.
              <br />
              - 😄 I belive that the future will always be better than the past <br />- 💜{" "}
              <br />
              - ⚡ Being optimistic is never wrong, at worst you just had some happiness.
              <br />
              - 📫 How to reach me: use the link below :)
              <br />
              <Link to="/contact" className="btn">
                kontakta mig
              </Link>
              <SocialLinks />
            </div>
          </article>
          <Image fluid={fluid} className="hero-img" />
         </div>
      </header>
    </HeroWrapper>
  )
}
export default Hero
