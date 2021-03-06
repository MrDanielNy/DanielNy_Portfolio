import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { JobsWrapper, JobsCenter, BtnContainer, JobBtn, JobInfo, JobDate } from '../elements/JobsElements'
import { Button } from './Button'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <section>
      <JobsWrapper>
      <Title title="Experiences" />
      <JobsCenter>
        {/* btn container */}
        <BtnContainer>
          {jobs.map((item, index) => {
            return (
              <JobBtn
                key={item.strapiId}
                onClick={() => setValue(index)}
              >
                {item.company}
              </JobBtn>
            )
          })}
        </BtnContainer>
        {/* job info */}
          <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>
            <p>{date}</p>
          </JobDate>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
          </JobInfo>
      </JobsCenter>
      <Button href="/about">
        My CV
      </Button>
      </JobsWrapper>
      
    </section>
  )
}

export default Jobs

