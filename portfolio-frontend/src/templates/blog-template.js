import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { BlogWrapper } from '../elements/BlogTemplateElements'

const ComponentName = ({ data }) => {
  console.log(data);
  const { content, title, desc } = data.blog
 
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <BlogWrapper>
       {/*} <div className="section-center">*/}
          <article>
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog">
            All articles
          </Link>
       {/* </div> */}
       
      </BlogWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName

