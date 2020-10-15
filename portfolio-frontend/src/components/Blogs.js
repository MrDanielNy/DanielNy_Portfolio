import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { BlogWrapper } from '../elements/BlogElements'
import { Button } from './Button'

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogWrapper>
      <section className="section">
        <Title title={title} />
        <div className="section-center blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
        {/* If the showLink is undefined, dont show any link, otherwise show link */}
        {showLink && (
          <Button href="/blog">
            All articles
          </Button>
        )}
      </section>
    </BlogWrapper>
  )
}
export default Blogs