import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { FourZeroFourWrapper } from '../elements/pages/FourZeroFourElements'
import { Button } from '../components/Button'

const Error = () => {
  return (
    <Layout>
      <SEO title="Something went wrong" />
      <FourZeroFourWrapper>
          <h2>Something went wrong...</h2>
          <p>...and you probably didn't want to see this. <br/> Please, use the home button below.</p>
          <Button href="/">Back home</Button>
      </FourZeroFourWrapper>
    </Layout>
  )
}

export default Error
