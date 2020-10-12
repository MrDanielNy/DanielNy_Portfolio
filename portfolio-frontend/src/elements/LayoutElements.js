import styled from 'styled-components'

export const LayoutWrapper = styled.div`
.about-page {
  padding: 7rem 0;
}

.about-img {
  margin-bottom: 2rem;
  height: 25rem;
}

.about-text .section-title {
  margin-bottom: 2rem;
  text-align: left;
}

.about-text .underline {
  margin-left: 0;
  margin-right: 0;
}

.about-text p {
  line-height: 2;
}

.stack-container {
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5rem;
}

.stack-container span {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: var(--clr-grey-4);
}

.stack-icon {
  color: var(--clr-primary-5);
  margin-right: 0.25rem;
  font-size: 1rem;
}

@media screen and (min-width: 992px) {
  .about-center {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }

  .about-img {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }

  .about-text {
    grid-column: 6 / -1;
  }
}

/*
===============
Contact Page
===============
*/
.contact-page {
  display: grid;
  place-items: center;
  padding: 5rem 0;
}
.contact-form {
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;
}
.contact-form:hover {
  box-shadow: var(--dark-shadow);
}
.contact-form h3 {
  padding-top: 1.25rem;
  color: var(--clr-grey-5);
}
.form-group {
  padding: 1rem 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

/*
===============
Blog Template
===============
*/
.blog-template {
  padding: 5rem 0;
}

.blog-template h1,
.blog-template h2 {
  text-align: center;
}
.blog-template ul {
  margin-top: 2rem;
  display: inline-block;
}
.blog-template ul li {
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  text-transform: uppercase;
}

.blog-template blockquote {
  background: var(--clr-primary-9);
  border-radius: var(--radius);
  padding: 1rem;
  line-height: 2;
  color: var(--clr-primary-5);
  margin: 2rem 0;
}
.blog-template pre {
  background: #222;
  color: yellow;
  overflow-x: scroll;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
}
.blog-template img {
  width: 15rem;
  height: 15rem;
  margin: 3rem 0;
}
/*
===============
Pages
===============
*/
.blog-template,
.projects-page,
.blog-page,
.error-page,
.about-page,
.contact-page {
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
}
.error-page {
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
}
.error-page h1 {
  text-transform: uppercase;
  color: var(--clr-primary-1);
  margin-bottom: 2rem;
}
/*
===============
Blog Page
===============
*/
.blog-page .blog {
  background: var(--clr-white);
}
`;