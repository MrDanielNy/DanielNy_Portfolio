import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactWrapper, 
  ContactFormWraper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactSubmitButton } from '../elements/pages/ContactElements'

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact page" />
      <ContactWrapper>
        <ContactFormWraper>
          <h3>Contact me</h3>
          <form action="https://formspree.io/f/mpzoqvja" method="POST">
            <ContactForm>
              <ContactInput 
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <ContactInput
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <ContactTextArea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></ContactTextArea>
            </ContactForm>
            <button type="submit" className="submit-btn btn">
              Contact me
            </button>
          </form>
        </ContactFormWraper>
      </ContactWrapper>
    </Layout>
  )
}

export default contact
