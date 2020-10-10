import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/Daniel_Ny_CV_2020.pdf"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Daniel Ny CV" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <ReactMarkdown source={info} />
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <div className="btn cv">
              <a href={downloadFile} download>Download full cv</a>{` `}
            </div>
            <Link to='/contact' className="btn">
              Contact me
            </Link>
          </article>
        </div>
        <>


        </>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About