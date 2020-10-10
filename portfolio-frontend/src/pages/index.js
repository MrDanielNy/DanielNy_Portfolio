import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

export default ( {data} ) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  let output = JSON.stringify(blogs);
  console.log(output);
  return (
    <Layout>
      <SEO />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="projects in focus" showLink />
      <Blogs blogs={blogs} title="Latest articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        category
        id
        title
        desc
        content
        date(formatString: "DD MM YYYY", locale: "SV")
        image {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
        slug
      }
    }
  }
  `