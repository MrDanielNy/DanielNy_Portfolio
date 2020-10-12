import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { BlogWrapper } from '../elements/BlogElements'

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
          <Link to="/blog" className="btn center-btn">
            Alla artiklar
          </Link>
        )}
      </section>
    </BlogWrapper>
  )
}
export default Blogs