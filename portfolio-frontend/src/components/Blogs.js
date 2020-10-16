import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { BlogWrapper, BlogCenter } from '../elements/BlogElements'
import { Button } from './Button'

export const Blogs = ({ blogs, title, showLink }) => { 
  return (
    <BlogWrapper>
      
        <Title title={title} />
        <BlogCenter>
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </BlogCenter>
        {/* If the showLink is undefined, dont show any link, otherwise show link */}
        {showLink && (
          <Button href="/blog">
            All articles
          </Button>
        )}
      
    </BlogWrapper>
  )
}
export default Blogs