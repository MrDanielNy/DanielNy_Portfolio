import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Something went wrong" />
      <main className="error-page">
        <div className="error-container">
          <h2>Something went wrong...</h2>
          <p>...and you probably didn't want to see this. <br/> Please, use the home button below.</p>
          <Link to="/" className="btn">
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
